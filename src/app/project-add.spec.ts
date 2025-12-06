import { TestBed } from '@angular/core/testing';

import { ProjectAdd } from './project-add';

describe('ProjectAdd', () => {
  let service: ProjectAdd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAdd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
