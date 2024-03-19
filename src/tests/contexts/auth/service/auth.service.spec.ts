import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../../../application/contexts/auth/service/auth.service';
import { IAuthService } from '../../../../application/contexts/auth/interfaces/service/auth-service.interface';
import { ClientModuleMock } from '../../client/mocks/module/client-module.mock';
import { signupArgs } from '../../../../application/contexts/auth/interfaces/args/args.interface';
import { DatabaseTableClientMock } from '../../client/mocks/database/client-repository.mock';
import { IClientService } from '../../../../application/contexts/client/interfaces/service/client-service.interface';
import { IUserService } from '../../../../application/contexts/user/interfaces/service/user-service.interface';
import { IClient } from '../../../../application/contexts/client/interfaces/entity/client-entity.interface';
import { IUser } from '../../../../application/contexts/user/interfaces/entity/user-entity.interface';
import { RolesBase } from '../../../../application/contexts/roles/base/entity/roles-base.entity';
import { ISignupResponse } from '../../../../application/contexts/auth/interfaces/responses/reponses-auth.interface';
import { ILevel } from '../../../../application/contexts/level/interfaces/entity/level-entity.interface';

describe.skip('AuthService', () => {
  let authService: IAuthService;
  let clientService: IClientService;
  let userService: IUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientModuleMock],
      providers: [AuthService]
    }).compile();

    authService = module.get<IAuthService>(AuthService);
    clientService = module.get<IClientService>('CLIENT_SERVICE');
    userService = module.get<IUserService>('USER_SERVICE');
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('signup', () => {
    const req: signupArgs = {
      clientArgs: {
        name: 'Blog Test',
        email: 'test@blogtest.com',
        domain: 'blogtest.com'
      },
      userArgs: {
        name: 'test',
        email: 'test@email.com',
        password: '123456789'
      }
    };

    it("should throw conflict exception when the client's domain is already in use", async () => {
      req.clientArgs.domain = DatabaseTableClientMock[0].domain;

      await expect(() => authService.signup(req)).rejects.toThrow({
        name: 'ConflictExcpetion',
        message: `the client with domain: ${req.clientArgs.domain} is already resgistred.`
      });
    });

    it("should throw conflict exception when the client's email is already in use", async () => {
      req.clientArgs.email = DatabaseTableClientMock[0].email;

      await expect(() => authService.signup(req)).rejects.toThrow({
        name: 'ConflictExcpetion',
        message: 'the email is already in use'
      });
    });

    it('should create a new client, the master level and a new user and return a ', async () => {
      const result = await authService.signup(req);
      const rolesBase: Omit<RolesBase, 'id'> = {
        create: true,
        read: true,
        update: true,
        delete: true
      };

      expect(result).toBe(
        expect.objectContaining<ISignupResponse>({
          client: {
            name: req.clientArgs.name,
            apiKey: expect.any(String)
          },
          user: {
            name: req.userArgs.name,
            email: req.userArgs.email,
            level: {} as ILevel
          }
        })
      );
      expect(clientService.generateKey).toHaveBeenCalledTimes(1);
      expect(clientService.add).toHaveBeenCalledWith(
        expect.objectContaining<Omit<IClient, 'id'>>({
          apiKey: expect.any(String),
          ...req.clientArgs
        })
      );
      expect(userService.add).toHaveBeenCalledWith(
        expect.objectContaining<Omit<IUser, 'id'>>({
          level: {
            id: 1,
            title: 'Master',
            roles: {
              users: {
                id: expect.any(Number),
                ...rolesBase
              },
              posts: {
                id: expect.any(Number),
                publish: true,
                ...rolesBase
              },
              comments: {
                id: expect.any(Number),
                answer: true,
                ...rolesBase
              }
            }
          },
          ...req.userArgs
        })
      );
    });
  });
});
