import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created without user', () => {
    expect(service).toBeTruthy();
    const resp = service.userIsLoggedIn();
    expect(resp).toBeFalsy();
  });

  it('should fail login when both parameters are wrong', () => {
    const resp = service.login({email: 'error', password: 'error' });
    expect(resp).toBeFalsy();
  });

  it('should fail login when email is wrong', () => {
    const resp = service.login({email: 'error', password: 'adminadmin' });
    expect(resp).toBeFalsy();
  });

  it('should fail login when password is wrong', () => {
    const resp = service.login({email: 'admin@email.com', password: 'error' });
    expect(resp).toBeFalsy();
  });

  it('should fail when user not logged in', () => {
    service.login({email: 'admin@email.com', password: 'error' });
    const resp = service.userIsLoggedIn();
    expect(resp).toBeFalsy();
  });

  it('should pass login when password is wrong', () => {
    const resp = service.login({email: 'admin@email.com', password: 'adminadmin' });
    expect(resp).toBeTruthy();
  });

  it('should pass recently loggedInUser when requested', () => {
    service.login({email: 'admin@email.com', password: 'adminadmin' });
    const resp = service.userIsLoggedIn();
    expect(resp).toBeTruthy();
  });
});
