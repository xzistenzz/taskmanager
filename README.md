# Планировщик (MERN + Docker)

Приложение для управления задачами, развёрнутое с помощью Docker.  
Учебный проект, моделирующий реальный процесс разработки и эксплуатации.

## Проделанная работа
- Реализовал полный цикл ввода в эксплуатацию full-stack приложения (React + Node.js + MongoDB) в Docker-контейнерах на Linux-сервере.
- Настроил сервер Ubuntu Server 22.04: задал статический IP, настроил SSH-доступ по ключам, отключил root-логин и парольную аутентификацию, активировал и настроил межсетевой экран UFW.
- Разработал Dockerfile с многоэтапной сборкой (multi-stage build) для уменьшения финального образа.
- Описал сервисы в docker-compose.yml (backend + база данных MongoDB), настроил Docker-том для сохранения данных, применил политику restart: always для автоматического поднятия контейнеров после сбоев и перезагрузки.

## Возможности
- Создание, удаление и отметка задач как выполненных
- Мгновенное обновление интерфейса (React)
- Хранение данных в MongoDB
- Полная контейнеризация (Docker, docker-compose)
- Автоматический перезапуск после перезагрузки сервера
- Статический IP для стабильного доступа

## Стек технологий
- **Frontend:** React (сборка Vite), JavaScript
- **Backend:** Node.js, Express, Mongoose
- **База данных:** MongoDB 6
- **DevOps:** Docker, Docker Compose, Linux (Ubuntu Server 22.04), UFW, SSH, Git, systemd

## Как запустить
### Требования
- Установленные Docker и Docker Compose (на Linux-сервере)

### Инструкция
1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/taskmanager.git
cd taskmanager
```
2. Соберите и запустите контейнеры:
```bash
docker-compose up -d --build
```
3. Откройте приложение в браузере по адресу http://localhost:5000 (или IP-адресу вашего сервера).

## Структура репозитория
```
taskmanager/
├── backend/             # API на Express
├── frontend/            # React-приложение
├── Dockerfile           # Многоэтапная сборка
├── docker-compose.yml   # Описание сервисов
└── README.md
```
