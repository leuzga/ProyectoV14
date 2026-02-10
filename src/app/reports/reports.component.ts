import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div style="padding: 20px; background: #fff3e0; border-radius: 8px;">
      <h2>📊 Reportes y Estadísticas (Angular 14)</h2>
      <p>Este es un módulo remoto desde ProyectoV14</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
        <div style="background: #4CAF50; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3>Total Usuarios</h3>
          <p style="font-size: 32px; margin: 10px 0;">{{ stats.totalUsers }}</p>
        </div>
        <div style="background: #2196F3; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3>Activos Hoy</h3>
          <p style="font-size: 32px; margin: 10px 0;">{{ stats.activeToday }}</p>
        </div>
        <div style="background: #FF9800; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3>Nuevos</h3>
          <p style="font-size: 32px; margin: 10px 0;">{{ stats.newUsers }}</p>
        </div>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 4px;">
        <h4>Actividad Reciente</h4>
        <ul style="list-style: none; padding: 0;">
          <li *ngFor="let activity of recentActivity" style="padding: 8px; border-bottom: 1px solid #ddd;">
            {{ activity }}
          </li>
        </ul>
      </div>
      
      <div style="margin-top: 20px; padding: 10px; background: #e3f2fd; border-radius: 4px;">
        <strong>Versión:</strong> Angular 14.2.0 con Module Federation
      </div>
    </div>
  `,
  styles: []
})
export class ReportsComponent {
  stats = {
    totalUsers: 1254,
    activeToday: 342,
    newUsers: 28
  };
  
  recentActivity = [
    '📈 Ventas aumentaron 15% esta semana',
    '👤 5 nuevos usuarios registrados hoy',
    '📊 Reporte mensual generado',
    '🔔 3 alertas de sistema pendientes'
  ];
}
