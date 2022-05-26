import React from "react";

import { ReactComponent as UrlIcon } from "../../svg/icon_url.svg";
import "./PrivateRoom.css";

const PrivateRoom = () => {
  return (
    <div className="PrivateRoom">
      <h2 className="PrivateRoom__title-name">
        <span>Личная комната </span> <strong>a.khalov</strong>
        <p className="PrivateRoom__statistic">
          10 трансляций | 2 воспроизведения
        </p>
      </h2>
      <span className="PrivateRoom__url-label">
        Скопируйте ссылку, чтобы пригласить
      </span>
      <div className="PrivateRoom__url-broadcast-container">
        <div className="PrivateRoom__url-container">
          <input
            className="PrivateRoom__url-input"
            type="url"
            label="https://conference.name.room#12345
"
          />
          <UrlIcon className="Url__icon" />
          <button className="PrivateRoom__copy-url-btn">
            <span className="Copy__url-btn-title">Скопировать ссылку</span>
          </button>
        </div>
      </div>
      <div className="PrivateRoom__broadcasting">
        <div className="PrivateRoom__player"></div>
        <button className="Start__broadcasting-btn">
          <span className="Start__broadcasting-btn-tittle">
            Начать
            <br />
            трансляцию
          </span>
        </button>
      </div>
      <div className="PrivateRoom__rooms">
        <div className="Room__container">
          <div className="Room__information">
            <div className="Room__square"></div>
            <div className="Room__tittle-description">
              <p className="Room__title">Личная комната</p>
              <p className="Room__description">
                Описание комнаты или комментарий
              </p>
            </div>
            <div className="Room__circles">
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
            </div>
          </div>
        </div>

        <div className="Room__container">
          <div className="Room__information">
            <div className="Room__square"></div>
            <div className="Room__title-description">
              <p className="Room__title">Корпоративная комната</p>
              <p className="Room__description">
                Описание комнаты или комментарий
              </p>
            </div>
            <div className="Room__circles">
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
            </div>
          </div>
        </div>

        <div className="Room__container">
          <div className="Room__information">
            <div className="NewRoom__square">
              <span className="NewRoom__btn-label">+</span>
            </div>
            <div className="Room__tittle-description">
              <p className="Room__title">Создать новую комнату</p>
            </div>
            <div className="Room__circles">
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
              <p className="Room__circle"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="PrivateRoom__broadcasting-history">
        <h4 className="Broadcasting__history-title">ИСТОРИЯ ТРАНСЛЯЦИЙ</h4>
        <div className="Broadcating__history-container">
          <div className="Broadcating__history-labels">
            <span className="Broadcating__history-label">Название</span>
            <span className="Broadcating__history-label">Длина записи</span>
            <span className="Broadcating__history-label">Видимость</span>
            <span className="Broadcating__history-label">Форматы</span>
          </div>
          <div className="Broadcating__history">
            <p>История трансляций пуста</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoom;
