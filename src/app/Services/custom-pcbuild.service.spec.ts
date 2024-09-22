import { TestBed } from '@angular/core/testing';

import { CustomPCBuildService } from './custom-pcbuild.service';

describe('CustomPCBuildService', () => {
  let service: CustomPCBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPCBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
