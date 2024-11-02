import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes:Routes = [
    { path: "", loadChildren: () => import("./pages/home/home.module").then(x => x.HomeModule) },
    { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule {}