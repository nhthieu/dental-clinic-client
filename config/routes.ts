﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/',
    layout: false,
    routes: [
      {
        name: 'dentist',
        path: '/dentist',
        component: './Dentist',
        routes: [
          {
            path: '/dentist/examination',
            component: './Dentist/Examination',
          },
          {
            path: '/dentist',
            redirect: '/dentist/examination',
          },
        ],
      },
      {
        name: 'staff',
        path: '/staff',
        component: './Staff',
        routes: [
          {
            path: '/staff/examination',
            routes: [
              {
                path: '/staff/examination',
                component: './Staff/Examination',
              },
              {
                path: '/staff/examination/add',
                component: './Staff/AddExamination',
              },
              {
                path: '/staff/examination/:id',
                component: './Staff/ExaminationDetail',
              },
            ],
          },
          {
            path: '/staff/appointment-request',
            component: './Staff/AppointmentRequest',
          },
          {
            path: '/staff/treatment-session',
            routes: [
              {
                path: '/staff/treatment-session',
                component: './Staff/TreatmentSession',
              },
              {
                path: '/staff/treatment-session/add',
                component: './Staff/AddTreatmentSession',
              },
              {
                path: '/staff/treatment-session/:id',
                component: './Staff/TreatmentSessionDetail',
              },
            ],
          },
          {
            path: '/staff/room',
            component: './Staff/Room',
          },
          {
            path: '/staff/patient',
            routes: [
              {
                path: '/staff/patient',
                component: './Staff/Patient',
              },
              {
                path: '/staff/patient/:id',
                component: './Staff/PatientDetail',
              },
              {
                path: '/staff/patient/:patientID/treatment-session/:id',
                component: './Staff/TreatmentSessionDetail',
              },
              {
                path: '/staff/patient/add',
                component: './Staff/AddPatient',
              },
            ],
          },
          {
            path: '/staff/dentist',
            component: './Staff/Dentist',
          },
          {
            path: '/staff',
            redirect: '/staff/examination',
          },
        ],
      },
      {
        name: 'admin',
        path: '/admin',
        component: './Admin',
        routes: [
          {
            path: '/admin/staff',
            routes: [
              {
                path: '/admin/staff',
                component: './Admin/Staff',
              },
              {
                path: '/admin/staff/add',
                component: './Admin/AddStaff',
              },
            ],
          },
          {
            path: '/admin/dentist',
            routes: [
              {
                path: '/admin/dentist',
                component: './Admin/Dentist',
              },
              {
                path: '/admin/dentist/add',
                component: './Admin/AddDentist',
              },
            ],
          },
          {
            path: '/admin/appointment-request',
            component: './Admin/AppointmentRequest',
          },
          {
            path: '/admin/room',
            component: './Admin/Room',
          },
          {
            path: '/admin',
            redirect: '/admin/staff',
          },
        ],
      },
      {
        name: 'portal',
        path: '/portal',
        component: './Portal',
      },
      {
        name: 'login',
        path: '/login',
        component: './Login',
      },
      {
        path: '/',
        redirect: '/portal',
      },
    ],
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
