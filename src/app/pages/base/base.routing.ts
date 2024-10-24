import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes:Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", loadChildren: () => import("./pages/home/home.module").then(x => x.HomeModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule {}