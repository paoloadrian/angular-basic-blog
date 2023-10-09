import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PostService } from '../services/post/post.service';
import { PostServiceMock } from '../services/post/post-service.mock'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ 
        { provide: PostService, useValue: PostServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Awesome blogs over here'`, () => {
    expect(component.title).toEqual('Awesome blogs over here');
  });

  it('should render title', () => {
    expect(compiled.querySelector('h1')?.textContent).toContain('Awesome blogs over here');
  });

  it('should render post in card', () => {
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(PostServiceMock.postsList[0].title);
    const subtitle = 'ID: ' + PostServiceMock.postsList[0].id + ' | User: ' + PostServiceMock.postsList[0].userId;
    expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain(subtitle);
    expect(compiled.querySelector('mat-card-content')?.textContent).toContain(PostServiceMock.postsList[0].body);
  });
});
