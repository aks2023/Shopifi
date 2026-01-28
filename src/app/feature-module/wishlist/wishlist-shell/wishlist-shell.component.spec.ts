import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistShellComponent } from './wishlist-shell.component';

describe('WishlistShellComponent', () => {
  let component: WishlistShellComponent;
  let fixture: ComponentFixture<WishlistShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
