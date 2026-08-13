import { Fragment } from 'react';

export const contactInfoList = [
  {
    id: '01',
    icon: '/images/contact/phone-call.png',
    title: 'Telepon',
    bg: '#FCF4FF',
    info: (
      <Fragment>
        <p>
          <a href="tel:+62887433130861" className="text-gray-lite text-lg dark:text-[#A6A6A6]">
            +62 8874 3313 0861
          </a>
        </p>
        <p>
          <a href="tel:+62887433130861" className="text-gray-lite text-lg dark:text-[#A6A6A6]">
            +62 8874 3313 0861
          </a>
        </p>
      </Fragment>
    ),
  },
  {
    id: '02',
    icon: '/images/contact/email.png',
    title: 'Email',
    bg: '#EEFBFF',
    info: (
      <Fragment>
        <p>
          <a href="mailto:solehudinz3692@gmail.com" className="text-gray-lite text-lg dark:text-[#A6A6A6]">
            solehudinz3692@gmail.com
          </a>
        </p>
        <p>
          <a href="mailto:solehudinz3692@gmail.com" className="text-gray-lite text-lg dark:text-[#A6A6A6]">
            solehudinz3692@gmail.com
          </a>
        </p>
      </Fragment>
    ),
  },
  {
    id: '03',
    icon: '/images/contact/map.png',
    title: 'Alamat',
    bg: '#F2F4FF',
    info: (
      <Fragment>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6]">Jungkel, Tanjakan Mekar</p>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6]">Kecamatan Rajeg, Kabupaten Tangerang</p>
      </Fragment>
    ),
  },
];
