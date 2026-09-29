import './dashboard.css'

const kpis = [
  { label: 'Ventas del mes', value: '$ 284,920', change: '+12.8%', tone: 'primary', icon: '↗', detail: 'vs. mes anterior' },
  { label: 'Pedidos procesados', value: '1,284', change: '+8.4%', tone: 'info', icon: '▤', detail: 'vs. mes anterior' },
  { label: 'Inventario valorizado', value: '$ 1.2M', change: '-2.1%', tone: 'warning', icon: '◈', detail: 'vs. mes anterior' },
  { label: 'Margen operativo', value: '32.6%', change: '+4.6%', tone: 'success', icon: '⌁', detail: 'vs. mes anterior' },
]

const bars = [42, 58, 48, 68, 62, 76, 69, 84, 72, 89, 78, 94]
const months = ['OCT', 'NOV', 'DIC', 'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP']
const branches = [['Lima Centro', '$ 98,420', '34.5%', '1,242', 'success'], ['Arequipa', '$ 72,180', '25.3%', '936', 'info'], ['Trujillo', '$ 55,640', '19.5%', '721', 'warning'], ['Cusco', '$ 34,890', '12.2%', '458', 'secondary']]

const inventoryAlerts = [
  { item: 'Laptop Pro 14', stock: '12 uds', status: 'Bajo', tone: 'warning' },
  { item: 'Impresora Zebra', stock: '8 uds', status: 'Crítico', tone: 'danger' },
  { item: 'Teclado mecánico', stock: '24 uds', status: 'Estable', tone: 'success' },
]

const taskQueue = [
  { title: 'Revisión de compras', detail: '3 proveedores pendientes', time: 'Hoy 15:30' },
  { title: 'Ajuste de precios', detail: '7 productos con margen bajo', time: 'Mañana' },
  { title: 'Cierre financiera', detail: 'Reporte mensual en validación', time: 'Jue 10:00' },
]

const channelPerformance = [
  { label: 'E-commerce', share: '46%', value: '$ 128K', tone: 'primary' },
  { label: 'Ventas directas', share: '31%', value: '$ 86K', tone: 'info' },
  { label: 'B2B', share: '23%', value: '$ 64K', tone: 'success' },
]

const topProducts = [
  { name: 'Laptop Pro 14', sold: '328', revenue: '$ 92,600', trend: '+18.4%' },
  { name: 'Smartphone X9', sold: '214', revenue: '$ 58,420', trend: '+11.2%' },
  { name: 'Monitor 27"', sold: '178', revenue: '$ 47,300', trend: '+9.1%' },
  { name: 'Impresora Pro', sold: '142', revenue: '$ 36,800', trend: '+7.5%' },
]

const salesSnapshots = [
  { label: 'Ticket promedio', value: '$ 1,240', delta: '+6.3%' },
  { label: 'Conversión', value: '24.8%', delta: '+2.1 pts' },
  { label: 'Cobranza', value: '96.4%', delta: '+1.8%' },
  { label: 'Clientes activos', value: '2,381', delta: '+7.9%' },
]

export function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <div className="brand-lockup">
          <span className="brand-wordmark">MATRIXFLOW</span>
          <span className="brand-tag">Enterprise</span>
        </div>

        <div className="hero-meta">
          <div>
            <span className="meta-label">Última actualización</span>
            <strong>Hoy, 09:42</strong>
          </div>
          <div className="status-pill"><i />En línea</div>
        </div>
      </div>

      <div className="dashboard-heading">
        <div>
          <div className="breadcrumb-line"><span>Inicio</span><span>/</span><b>Dashboard</b></div>
          <h1>Dashboard ejecutivo</h1>
          <p>Resumen de ventas, inventario e indicadores empresariales.</p>
        </div>

        <div className="heading-actions">
          <select defaultValue="all" aria-label="Seleccionar periodo">
            <option value="all">Este mes</option>
            <option value="quarter">Este trimestre</option>
            <option value="year">Este año</option>
          </select>
          <button className="btn btn-primary">＋ Nueva operación</button>
        </div>
      </div>

      <section className="kpi-grid" aria-label="Indicadores ejecutivos">
        {kpis.map((kpi) => (
          <article className={`stat-card ${kpi.tone}`} key={kpi.label}>
            <div className="stat-card-body">
              <div>
                <span className="stat-label">{kpi.label}</span>
                <strong>{kpi.value}</strong>
              </div>
              <span className="stat-icon">{kpi.icon}</span>
            </div>
            <div className="stat-card-footer">
              <b>{kpi.change}</b>
              <span>{kpi.detail}</span>
              <span className="stat-arrow">→</span>
            </div>
          </article>
        ))}
      </section>

      <section className="chart-grid">
        <article className="content-card chart-card">
          <div className="card-header">
            <div>
              <h2>Ventas netas</h2>
              <p>Rendimiento mensual comparado</p>
            </div>
            <button className="card-menu" aria-label="Más opciones">•••</button>
          </div>
          <div className="chart-total">
            <strong>$ 284,920</strong>
            <span>↑ 12.8%</span>
          </div>
          <div className="sales-chart">
            <div className="chart-y-axis">
              <span>$300k</span>
              <span>$200k</span>
              <span>$100k</span>
              <span>$0</span>
            </div>
            <div className="chart-area">
              <div className="chart-grid-lines"><i /><i /><i /><i /></div>
              <div className="chart-bars">
                {bars.map((height, index) => (
                  <div className="bar-column" key={months[index]}>
                    <div className={`chart-bar ${index > 9 ? 'current' : ''}`} style={{ height: `${height}%` }} />
                    <span>{months[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="content-card target-card">
          <div className="card-header">
            <div>
              <h2>Cumplimiento de meta</h2>
              <p>Ventas del periodo actual</p>
            </div>
            <button className="card-menu" aria-label="Más opciones">•••</button>
          </div>
          <div className="target-gauge">
            <div className="gauge-ring">
              <strong>82<span>%</span></strong>
              <small>cumplido</small>
            </div>
          </div>
          <div className="target-values">
            <div><span>Actual</span><strong>$ 284,920</strong></div>
            <div><span>Objetivo</span><strong>$ 350,000</strong></div>
          </div>
          <div className="progress"><div style={{ width: '82%' }} /></div>
          <p className="target-note">Faltan <b>$ 65,080</b> para alcanzar el objetivo mensual.</p>
        </article>
      </section>

      <section className="data-grid">
        <article className="content-card table-card">
          <div className="card-header">
            <div>
              <h2>Ventas por sucursal</h2>
              <p>Distribución de ingresos del mes</p>
            </div>
            <button className="btn btn-outline">Ver reporte →</button>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Sucursal</th>
                  <th>Ventas netas</th>
                  <th>Participación</th>
                  <th>Pedidos</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {branches.map(([branch, sales, share, orders, status]) => (
                  <tr key={branch}>
                    <td><span className="branch-avatar">{branch.charAt(0)}</span><b>{branch}</b></td>
                    <td>{sales}</td>
                    <td>
                      <div className="share-cell">
                        <span>{share}</span>
                        <div className="mini-progress"><i className={status} style={{ width: share }} /></div>
                      </div>
                    </td>
                    <td>{orders}</td>
                    <td><span className={`badge ${status}`}>{status === 'success' ? 'En objetivo' : status === 'warning' ? 'En revisión' : 'Activo'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="content-card activity-card">
          <div className="card-header">
            <div>
              <h2>Actividad reciente</h2>
              <p>Últimos movimientos del sistema</p>
            </div>
            <button className="card-menu" aria-label="Más opciones">•••</button>
          </div>

          <div className="activity-list">
            <div>
              <i className="activity-dot primary" />
              <section>
                <b>Venta registrada</b>
                <span>Pedido #MF-9284 · Lima Centro</span>
              </section>
              <time>12 min</time>
            </div>
            <div>
              <i className="activity-dot info" />
              <section>
                <b>Inventario actualizado</b>
                <span>32 productos · Arequipa</span>
              </section>
              <time>38 min</time>
            </div>
            <div>
              <i className="activity-dot warning" />
              <section>
                <b>Nueva matriz calculada</b>
                <span>Proyección Q4 · Laura Méndez</span>
              </section>
              <time>1 h</time>
            </div>
            <div>
              <i className="activity-dot success" />
              <section>
                <b>Producto agregado</b>
                <span>Laptop Pro 14 · Catálogo</span>
              </section>
              <time>2 h</time>
            </div>
          </div>

          <button className="activity-link">Ver todo el historial →</button>
        </article>
      </section>

      <section className="sales-insights-grid">
        <article className="content-card compact-card">
          <div className="card-header">
            <div>
              <h2>Resumen operativo</h2>
              <p>Indicadores clave de ventas</p>
            </div>
          </div>

          <div className="snapshot-grid">
            {salesSnapshots.map((item) => (
              <div className="snapshot-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.delta}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card compact-card">
          <div className="card-header">
            <div>
              <h2>Top productos</h2>
              <p>Más vendidos este mes</p>
            </div>
          </div>

          <div className="product-list">
            {topProducts.map((product) => (
              <div className="product-item" key={product.name}>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.sold} unidades</span>
                </div>
                <div className="product-meta">
                  <b>{product.revenue}</b>
                  <em>{product.trend}</em>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="management-grid">
        <article className="content-card compact-card">
          <div className="card-header">
            <div>
              <h2>Inventario crítico</h2>
              <p>Productos con stock bajo</p>
            </div>
          </div>

          <div className="mini-list">
            {inventoryAlerts.map((item) => (
              <div className="mini-list-item" key={item.item}>
                <div>
                  <strong>{item.item}</strong>
                  <span>{item.stock}</span>
                </div>
                <span className={`tag ${item.tone}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card compact-card">
          <div className="card-header">
            <div>
              <h2>Próximas tareas</h2>
              <p>Operaciones de seguimiento</p>
            </div>
          </div>

          <div className="task-list">
            {taskQueue.map((task) => (
              <div className="task-item" key={task.title}>
                <div className="task-bullet" />
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.detail}</span>
                </div>
                <time>{task.time}</time>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card compact-card">
          <div className="card-header">
            <div>
              <h2>Canales de venta</h2>
              <p>Composición del ingreso</p>
            </div>
          </div>

          <div className="channel-list">
            {channelPerformance.map((channel) => (
              <div className="channel-row" key={channel.label}>
                <div className="channel-labels">
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </div>
                <div className="channel-track">
                  <i className={channel.tone} style={{ width: channel.share }} />
                </div>
                <small>{channel.share}</small>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
