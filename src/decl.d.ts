// Declaración de tipos para los módulos expuestos por ProyectoV14 (REMOTE)

declare module '*.ts' {
  const content: any;
  export default content;
}

// Declaraciones para los módulos expuestos por ProyectoV14
// Estos módulos son consumidos por ProyectoV19 (HOST)

declare module 'proyectoV14/UsersModule' {
  import { NgModule } from '@angular/core';
  export class UsersModule {}
}

declare module 'proyectoV14/ReportsModule' {
  import { NgModule } from '@angular/core';
  export class ReportsModule {}
}

declare module 'proyectoV14/AppModule' {
  import { NgModule } from '@angular/core';
  export class AppModule {}
}

declare module 'proyectoV14/AppComponent' {
  import { Component } from '@angular/core';
  export class AppComponent {}
}
