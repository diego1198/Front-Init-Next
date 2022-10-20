import Link from "next/link";
import { useState } from "react";
import { Timeline } from "./timeline";

export const Notificactions = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const handleShow = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <Link href={""}>
        <a
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={handleShow}
        >
          <i className="icon dripicons-bell"></i>
        </a>
      </Link>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          showNotifications && "show"
        }`}
      >
        <div className="card card-notification">
          <div className="card-header">
            <h5 className="card-title">Notificaciones</h5>
          </div>
          <div className="card-body">
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="timeline timeline-border">
                  <div className="timeline-list timeline-border timeline-info">
                    <Timeline
                      description="User 1 ha realizado una gestión al usuario Perez José
                        con el estado"
                      state="Pendiente"
                      date="07/05/18, 2:00 PM"
                    />
                    <Timeline
                      description="User 3 ha realizado una gestión al usuario Marquez Juán
                        con el estado"
                      date="07/05/18, 1:58 PM"
                      state="Seguimiento"
                    />
                    <Timeline
                      description="User 1 ha realizado una gestión al usuario Perez José
                        con el estado"
                      state="Pendiente"
                      date="07/05/18, 2:00 PM"
                    />
                    <Timeline
                      description="User 3 ha realizado una gestión al usuario Marquez Juán
                        con el estado"
                      date="07/05/18, 1:58 PM"
                      state="Seguimiento"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
