import { TestBed } from '@angular/core/testing';

import { ConfigSocialLoginButtonService } from './config-social-login-button.service';

describe('ConfigSocialLoginButtonService', () => {
  let service: ConfigSocialLoginButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigSocialLoginButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
