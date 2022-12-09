<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# listify

this is frontend side of listify project

A To do list Web App, created for Pemrograman Aplikasi Web class <br/>
check more about backend side [here][backend-side]

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

[Preview](#preview) •
[Web Page](#web-page) •
[Output Structure](#output-structure) •
[Prerequisites](#prerequisites) •
[Getting Started](#getting-started) •
[Support File](#support-file)

</div>

## Preview

[Listify Preview][listify-gif]

## Web Page

[Listify Website][listify-page]

## Author
- [Wiweka Yoga Sadewa](https://github.com/wiweka24)
- [Hapsari Prabandhari](https://github.com/Hapsarip)
- [Kurnia Dwi Utami](https://github.com/kurniakdu)
- [Muhammad Zikriansyah](https://github.com/MuhammadZikriansyah)
- [Vira Ayu Oktaviani](https://github.com/viraayuoktvn)

## Output Structure

```shell
frontend-kelompok4/
├── public/
├── src/
|   ├── component/
|   ├── img/
|   └── pages/
|   |   ├── Activity.js
|   |   ├── Calendar.js
|   |   ├── EditAct.js
|   |   ├── EditProfile.js
|   |   ├── Form.js
|   |   ├── Homepage.js
|   |   ├── Login.js
|   |   ├── NotFound.js
|   |   ├── Profile.js
|   |   └── Register.js
|   ├── App.js
|   ├── index.js
|   ├── index.css
|   └── ...
├── package.json
├── tailwind.config.json
└── ...
```

## Fependencies
```shell
react
axios
moment
react-toastify
tailwindcss
```

## Prerequisites
[Download][node-js] and install Node.js version 16.15 or higher.

## Getting Started
Setting up project for local usage.
1. Clone or Download this repository
    ```shell
    https://github.com/wiweka24/frontend-kelompok4.git
    ```
    if using SSS
    ```shell
    git@github.com:wiweka24/frontend-kelompok4.git
    ```
2. Install NPM packages
    ```shell
    npm install
    ```
3. Make .env file in root folder<br/>
    example .env
    ```shell
    REACT_APP_API_DOMAIN = "your backend domain"
    ```
4. Run the program
    ```shell
    npm start
    ```

## Support File
- [Design UI][design-file]<br/>
- [Presentasi][ppt-file]




[backend-side]: https://github.com/Hapsarip/api-crud-kelompok4
[listify-page]: https://listifyY.vercel.app/#/
[node-js]: https://nodejs.org/en/download/
[design-file]: https://www.figma.com/file/mYANo06pmE27YNkZK8TPb8/FE-PAW-Kelompok-4?node-id=0%3A1&t=C7szVUn5GEn7dK4S-1
[ppt-file]: https://docs.google.com/presentation/d/1OA5iKPMLR1K8ttZ1dSMloB1PQbUx3Vknz8xOXvhS39Q/edit?usp=sharing
[listify-gif]: https://user-images.githubusercontent.com/70740913/206736523-34c932b4-33f1-4a85-bc8a-ffedef646cfd.mp4
