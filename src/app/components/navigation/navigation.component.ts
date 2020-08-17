import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isAuth = false;
  userSub: Subscription;
  constructor(
    private storage: StorageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }

  onSaveRecipe() {
    this.storage.save();
  }

  fetchRecipes() {
    this.userSub = this.storage.get().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
