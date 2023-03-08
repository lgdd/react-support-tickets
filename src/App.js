import LiferayService from './LiferayService';
import { useState, useEffect } from 'react';

function App() {
  const scopeKey = window['Liferay']
    ? window['Liferay'].ThemeDisplay.getSiteGroupId()
    : 50123;
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await LiferayService.get(
        `/o/c/supporttickets/scopes/${scopeKey}`
      );

      setData(result);
    };

    fetchData();
  }, [scopeKey]);

  const priorityCss = (priority) => {
    if (priority === 'major') {
      return 'label label-warning';
    }
    if (priority === 'critical') {
      return 'label label-danger';
    }
    return 'label label-secondary';
  };

  const stateCss = (state) => {
    if (state === 'open') {
      return 'label label-success';
    }
    if (state === 'closed') {
      return 'label label-danger';
    }
    return 'label label-info';
  };

  const viewTicket = (id) => {
    window.location.href = `/web/member-portal/l/${id}`;
  };

  return (
    <div className="App">
      <table class="table table-autofit table-list table-nowrap table-responsive">
        <thead>
          <tr>
            <th class="table-cell-expand">
              <span class="text-truncate-inline">
                <span class="text-truncate">Subject</span>
              </span>
            </th>
            <th class="table-cell-expand">
              <span class="text-truncate-inline">
                <span class="text-truncate">State</span>
              </span>
            </th>
            <th class="table-cell-expand">
              <span class="text-truncate-inline">
                <span class="text-truncate">Priority</span>
              </span>
            </th>
            <th class="table-column-text-end"></th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => {
            return (
              <tr>
                <td class="table-cell-expand">
                  <div class="table-list-title">
                    <span class="text-truncate-inline">
                      <span class="text-truncate">{item.subject}</span>
                    </span>
                  </div>
                </td>
                <td class="table-cell-expand">
                  <span class="text-truncate-inline">
                    <span className={stateCss(item.state.key)}>
                      <span class="label-item label-item-expand">
                        {item.state.name}
                      </span>
                    </span>
                  </span>
                </td>
                <td class="table-cell-expand">
                  <span class="text-truncate-inline">
                    <span className={priorityCss(item.priority.key)}>
                      <span class="label-item label-item-expand">
                        {item.priority.name}
                      </span>
                    </span>
                  </span>
                </td>
                <td class="table-column-text-end">
                  <div class="btn-group btn-group-nowrap">
                    <div class="btn-group-item">
                      <button
                        class="btn btn-secondary btn-sm"
                        type="button"
                        onClick={() => {
                          viewTicket(item.id);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
