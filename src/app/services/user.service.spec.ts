import { UserService } from './user.service';

describe('UserService', () => {
  
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });
  // const { userService, dummyValues, serviceSpy } = setup();

  it('should fetch user for email as id', (done: DoneFn) => {
    const expectedUserName = 'orangesnake541';

    userService.getUser('gloria.marin@example.com').subscribe({
      next: (user) => {
        expect(user?.login.username)
          .withContext(
            'expect username orangesnake541 for email gloria.marin@example.com'
          )
          .toEqual(expectedUserName);
        done();
      },
    });
  });

  it('should fetch no user', (done: DoneFn) => {
    userService.getUser('gloria.marin@e§§§§§mple.com').subscribe({
      next: (user) => {
        expect(user)
          .withContext(
            'expect to be undefined'
          ).toBeUndefined()
        done();
      },
    });
  });
});
