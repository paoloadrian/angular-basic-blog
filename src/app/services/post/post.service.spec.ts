import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PostService } from './post.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        { provide:  HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
