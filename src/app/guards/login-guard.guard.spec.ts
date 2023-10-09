import { TestBed } from '@angular/core/testing';

import { LoginGuardGuard } from './login-guard.guard';
import { UserService } from '../services/user/user.service';

describe('LoginGuardGuard', () => {
  let guard: LoginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [UserService]});
    guard = TestBed.inject(LoginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
