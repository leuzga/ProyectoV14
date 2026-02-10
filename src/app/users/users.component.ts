import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <div style="padding: 20px; background: #f0f8ff; border-radius: 8px;">
      <h2>👥 Gestión de Usuarios (Angular 14)</h2>
      <p>Este es un módulo remoto desde ProyectoV14</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background: #333; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Nombre</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Email</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users" style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; border: 1px solid #ddd;">{{ user.id }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ user.name }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ user.email }}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
      
      <div style="margin-top: 20px; padding: 10px; background: #e3f2fd; border-radius: 4px;">
        <strong>Versión:</strong> Angular 14.2.0 con Module Federation
      </div>
    </div>
  `,
  styles: []
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin' },
    { id: 2, name: 'María García', email: 'maria@example.com', role: 'Usuario' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', role: 'Editor' },
    { id: 4, name: 'Ana Martínez', email: 'ana@example.com', role: 'Usuario' }
  ];
}
