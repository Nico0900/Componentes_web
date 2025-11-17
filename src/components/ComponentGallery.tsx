import { useState, useMemo } from 'react';
import ComponentCard from './ComponentCard';
import LazyCard from './LazyCard';
import { componentsData } from '../data/componentsData';

// Import all component examples
import Button1Example from './examples/Button1Example';
import Button2Example from './examples/Button2Example';
import Button3Example from './examples/Button3Example';
import Button4Example from './examples/Button4Example';
import Button5Example from './examples/Button5Example';
import Button6Example from './examples/Button6Example';
import Button7Example from './examples/Button7Example';

import Card1Example from './examples/Card1Example';
import Card2Example from './examples/Card2Example';
import Card3Example from './examples/Card3Example';
import Card4Example from './examples/Card4Example';
import Card5Example from './examples/Card5Example';
import Card6Example from './examples/Card6Example';
import Card7Example from './examples/Card7Example';

import Alert1Example from './examples/Alert1Example';
import Alert2Example from './examples/Alert2Example';
import Alert3Example from './examples/Alert3Example';
import Alert4Example from './examples/Alert4Example';
import Alert5Example from './examples/Alert5Example';
import Alert6Example from './examples/Alert6Example';


import Badge1Example from './examples/Badge1Example';
import Badge2Example from './examples/Badge2Example';
import Badge3Example from './examples/Badge3Example';
import Badge4Example from './examples/Badge4Example';
import Badge5Example from './examples/Badge5Example';
import Badge6Example from './examples/Badge6Example';

import Input1Example from './examples/Input1Example';
import Input2Example from './examples/Input2Example';
import Input3Example from './examples/Input3Example';
import Input4Example from './examples/Input4Example';
import Input5Example from './examples/Input5Example';
import Input6Example from './examples/Input6Example';

// Modals
import Modal1Example from './examples/Modal1Example';
import Modal2Example from './examples/Modal2Example';
import Modal3Example from './examples/Modal3Example';
import Modal4Example from './examples/Modal4Example';
import Modal5Example from './examples/Modal5Example';
import Modal6Example from './examples/Modal6Example';
import Modal7Example from './examples/Modal7Example';
import Modal8Example from './examples/Modal8Example';
import Modal9Example from './examples/Modal9Example';
import Modal10Example from './examples/Modal10Example';
import Modal11Example from './examples/Modal11Example';
import Modal12Example from './examples/Modal12Example';
import Modal13Example from './examples/Modal13Example';
import Modal14Example from './examples/Modal14Example';
import Modal15Example from './examples/Modal15Example';

// Navigation
import Nav1Example from './examples/Nav1Example';
import Nav2Example from './examples/Nav2Example';
import Nav3Example from './examples/Nav3Example';
import Nav4Example from './examples/Nav4Example';
import Nav5Example from './examples/Nav5Example';
import Nav6Example from './examples/Nav6Example';
import Nav7Example from './examples/Nav7Example';
import Nav8Example from './examples/Nav8Example';
import Nav9Example from './examples/Nav9Example';
import Nav10Example from './examples/Nav10Example';
import Nav11Example from './examples/Nav11Example';
import Nav12Example from './examples/Nav12Example';
import Nav13Example from './examples/Nav13Example';
import Nav14Example from './examples/Nav14Example';
import Nav15Example from './examples/Nav15Example';

// Tables
import Table1Example from './examples/Table1Example';
import Table2Example from './examples/Table2Example';
import Table3Example from './examples/Table3Example';
import Table4Example from './examples/Table4Example';
import Table5Example from './examples/Table5Example';
import Table6Example from './examples/Table6Example';
import Table7Example from './examples/Table7Example';
import Table8Example from './examples/Table8Example';
import Table9Example from './examples/Table9Example';
import Table10Example from './examples/Table10Example';
import Table11Example from './examples/Table11Example';
import Table12Example from './examples/Table12Example';
import Table13Example from './examples/Table13Example';
import Table14Example from './examples/Table14Example';
import Table15Example from './examples/Table15Example';

// Forms
import Form1Example from './examples/Form1Example';
import Form2Example from './examples/Form2Example';
import Form3Example from './examples/Form3Example';
import Form4Example from './examples/Form4Example';
import Form5Example from './examples/Form5Example';
import Form6Example from './examples/Form6Example';
import Form7Example from './examples/Form7Example';
import Form8Example from './examples/Form8Example';
import Form9Example from './examples/Form9Example';
import Form10Example from './examples/Form10Example';
import Form11Example from './examples/Form11Example';
import Form12Example from './examples/Form12Example';
import Form13Example from './examples/Form13Example';

// Loading
import Loading1Example from './examples/Loading1Example';
import Loading2Example from './examples/Loading2Example';
import Loading3Example from './examples/Loading3Example';
import Loading4Example from './examples/Loading4Example';
import Loading5Example from './examples/Loading5Example';
import Loading6Example from './examples/Loading6Example';
import Loading7Example from './examples/Loading7Example';
import Loading8Example from './examples/Loading8Example';
import Loading9Example from './examples/Loading9Example';
import Loading10Example from './examples/Loading10Example';
import Loading11Example from './examples/Loading11Example';
import Loading12Example from './examples/Loading12Example';
import Loading13Example from './examples/Loading13Example';
import Loading14Example from './examples/Loading14Example';
import Loading15Example from './examples/Loading15Example';
import Loading16Example from './examples/Loading16Example';
import Loading17Example from './examples/Loading17Example';
import Loading18Example from './examples/Loading18Example';
import Loading19Example from './examples/Loading19Example';
import Loading20Example from './examples/Loading20Example';
import Loading21Example from './examples/Loading21Example';
import Loading22Example from './examples/Loading22Example';
import Loading23Example from './examples/Loading23Example';
import Loading24Example from './examples/Loading24Example';
import Loading25Example from './examples/Loading25Example';
import Loading26Example from './examples/Loading26Example';
import Loading27Example from './examples/Loading27Example';
import Loading28Example from './examples/Loading28Example';
import Loading29Example from './examples/Loading29Example';
import Loading30Example from './examples/Loading30Example';
import Loading31Example from './examples/Loading31Example';
import Loading32Example from './examples/Loading32Example';
import Loading33Example from './examples/Loading33Example';
import Loading34Example from './examples/Loading34Example';
import Loading35Example from './examples/Loading35Example';
import Loading36Example from './examples/Loading36Example';
import Loading37Example from './examples/Loading37Example';
import Loading38Example from './examples/Loading38Example';
import Loading39Example from './examples/Loading39Example';
import Loading40Example from './examples/Loading40Example';
import Loading41Example from './examples/Loading41Example';
import Loading42Example from './examples/Loading42Example';
import Loading43Example from './examples/Loading43Example';
import Loading44Example from './examples/Loading44Example';
import Loading45Example from './examples/Loading45Example';
import Loading46Example from './examples/Loading46Example';
import Loading47Example from './examples/Loading47Example';
import Loading48Example from './examples/Loading48Example';
import Loading49Example from './examples/Loading49Example';
import Loading50Example from './examples/Loading50Example';
import Loading51Example from './examples/Loading51Example';
import Loading52Example from './examples/Loading52Example';
import Loading53Example from './examples/Loading53Example';
import Loading54Example from './examples/Loading54Example';
import Loading55Example from './examples/Loading55Example';
import Loading56Example from './examples/Loading56Example';
import Loading57Example from './examples/Loading57Example';
import Loading58Example from './examples/Loading58Example';
import Loading59Example from './examples/Loading59Example';
import Loading60Example from './examples/Loading60Example';
import Loading61Example from './examples/Loading61Example';
import Loading62Example from './examples/Loading62Example';
import Loading63Example from './examples/Loading63Example';
import Loading64Example from './examples/Loading64Example';
import Loading65Example from './examples/Loading65Example';
import Loading66Example from './examples/Loading66Example';
import Loading67Example from './examples/Loading67Example';
import Loading68Example from './examples/Loading68Example';
import Loading69Example from './examples/Loading69Example';
import Loading70Example from './examples/Loading70Example';
import Loading71Example from './examples/Loading71Example';
import Loading72Example from './examples/Loading72Example';
import Loading73Example from './examples/Loading73Example';
import Loading74Example from './examples/Loading74Example';
import Loading75Example from './examples/Loading75Example';
import Loading76Example from './examples/Loading76Example';
import Loading77Example from './examples/Loading77Example';
import Loading78Example from './examples/Loading78Example';
import Loading79Example from './examples/Loading79Example';
import Loading80Example from './examples/Loading80Example';
import Loading81Example from './examples/Loading81Example';
import Loading82Example from './examples/Loading82Example';
import Loading83Example from './examples/Loading83Example';
import Loading84Example from './examples/Loading84Example';
import Loading85Example from './examples/Loading85Example';
import Loading86Example from './examples/Loading86Example';
import Loading87Example from './examples/Loading87Example';
import Loading88Example from './examples/Loading88Example';
import Loading89Example from './examples/Loading89Example';
import Loading90Example from './examples/Loading90Example';
import Loading91Example from './examples/Loading91Example';
import Loading92Example from './examples/Loading92Example';
import Loading93Example from './examples/Loading93Example';
import Loading94Example from './examples/Loading94Example';
import Loading95Example from './examples/Loading95Example';
import Loading96Example from './examples/Loading96Example';
import Loading97Example from './examples/Loading97Example';
import Loading98Example from './examples/Loading98Example';
import Loading99Example from './examples/Loading99Example';
import Loading100Example from './examples/Loading100Example';
import Loading101Example from './examples/Loading101Example';
import Loading102Example from './examples/Loading102Example';
import Loading103Example from './examples/Loading103Example';
import Loading104Example from './examples/Loading104Example';
import Loading105Example from './examples/Loading105Example';
import Loading106Example from './examples/Loading106Example';
import Loading107Example from './examples/Loading107Example';
import Loading108Example from './examples/Loading108Example';
import Loading109Example from './examples/Loading109Example';
import Loading110Example from './examples/Loading110Example';
import Loading111Example from './examples/Loading111Example';
import Loading112Example from './examples/Loading112Example';
import Loading113Example from './examples/Loading113Example';
import Loading114Example from './examples/Loading114Example';
import Loading115Example from './examples/Loading115Example';
import Loading116Example from './examples/Loading116Example';
import Loading117Example from './examples/Loading117Example';
import Loading118Example from './examples/Loading118Example';
import Loading119Example from './examples/Loading119Example';
import Loading120Example from './examples/Loading120Example';
import Loading121Example from './examples/Loading121Example';
import Loading122Example from './examples/Loading122Example';
import Loading123Example from './examples/Loading123Example';
import Loading124Example from './examples/Loading124Example';
import Loading125Example from './examples/Loading125Example';
import Loading126Example from './examples/Loading126Example';
import Loading127Example from './examples/Loading127Example';
import Loading128Example from './examples/Loading128Example';
import Loading129Example from './examples/Loading129Example';

// Tooltips
import Tooltip1Example from './examples/Tooltip1Example';
import Tooltip2Example from './examples/Tooltip2Example';
import Tooltip3Example from './examples/Tooltip3Example';
import Tooltip4Example from './examples/Tooltip4Example';
import Tooltip5Example from './examples/Tooltip5Example';
import Tooltip6Example from './examples/Tooltip6Example';
import Tooltip7Example from './examples/Tooltip7Example';
import Tooltip8Example from './examples/Tooltip8Example';
import Tooltip9Example from './examples/Tooltip9Example';
import Tooltip10Example from './examples/Tooltip10Example';
import Tooltip11Example from './examples/Tooltip11Example';
import Tooltip12Example from './examples/Tooltip12Example';
import Tooltip13Example from './examples/Tooltip13Example';
import Tooltip14Example from './examples/Tooltip14Example';
import Tooltip15Example from './examples/Tooltip15Example';

// Accordions
import Accordion1Example from './examples/Accordion1Example';
import Accordion2Example from './examples/Accordion2Example';
import Accordion3Example from './examples/Accordion3Example';
import Accordion4Example from './examples/Accordion4Example';
import Accordion5Example from './examples/Accordion5Example';
import Accordion6Example from './examples/Accordion6Example';
import Accordion7Example from './examples/Accordion7Example';
import Accordion8Example from './examples/Accordion8Example';
import Accordion9Example from './examples/Accordion9Example';
import Accordion10Example from './examples/Accordion10Example';
import Accordion11Example from './examples/Accordion11Example';
import Accordion12Example from './examples/Accordion12Example';
import Accordion13Example from './examples/Accordion13Example';
import Accordion14Example from './examples/Accordion14Example';
import Accordion15Example from './examples/Accordion15Example';

// Carousels
import Carousel1Example from './examples/Carousel1Example';
import Carousel2Example from './examples/Carousel2Example';
import Carousel3Example from './examples/Carousel3Example';
import Carousel4Example from './examples/Carousel4Example';
import Carousel5Example from './examples/Carousel5Example';
import Carousel6Example from './examples/Carousel6Example';
import Carousel7Example from './examples/Carousel7Example';
import Carousel8Example from './examples/Carousel8Example';
import Carousel9Example from './examples/Carousel9Example';
import Carousel10Example from './examples/Carousel10Example';
import Carousel11Example from './examples/Carousel11Example';
import Carousel12Example from './examples/Carousel12Example';
import Carousel13Example from './examples/Carousel13Example';
import Carousel14Example from './examples/Carousel14Example';
import Carousel15Example from './examples/Carousel15Example';

// Timeline
import Timeline1Example from './examples/Timeline1Example';
import Timeline2Example from './examples/Timeline2Example';
import Timeline3Example from './examples/Timeline3Example';
import Timeline4Example from './examples/Timeline4Example';
import Timeline5Example from './examples/Timeline5Example';
import Timeline6Example from './examples/Timeline6Example';
import Timeline7Example from './examples/Timeline7Example';
import Timeline8Example from './examples/Timeline8Example';
import Timeline9Example from './examples/Timeline9Example';
import Timeline10Example from './examples/Timeline10Example';
import Timeline11Example from './examples/Timeline11Example';
import Timeline12Example from './examples/Timeline12Example';
import Timeline13Example from './examples/Timeline13Example';
import Timeline14Example from './examples/Timeline14Example';
import Timeline15Example from './examples/Timeline15Example';

// Stats
import Stats1Example from './examples/Stats1Example';
import Stats2Example from './examples/Stats2Example';
import Stats3Example from './examples/Stats3Example';
import Stats4Example from './examples/Stats4Example';
import Stats5Example from './examples/Stats5Example';
import Stats6Example from './examples/Stats6Example';
import Stats7Example from './examples/Stats7Example';
import Stats8Example from './examples/Stats8Example';
import Stats9Example from './examples/Stats9Example';
import Stats10Example from './examples/Stats10Example';
import Stats11Example from './examples/Stats11Example';
import Stats12Example from './examples/Stats12Example';
import Stats13Example from './examples/Stats13Example';
import Stats14Example from './examples/Stats14Example';
import Stats15Example from './examples/Stats15Example';

// Notifications
import Notification1Example from './examples/Notification1Example';
import Notification2Example from './examples/Notification2Example';
import Notification3Example from './examples/Notification3Example';
import Notification4Example from './examples/Notification4Example';
import Notification5Example from './examples/Notification5Example';
import Notification6Example from './examples/Notification6Example';
import Notification7Example from './examples/Notification7Example';
import Notification8Example from './examples/Notification8Example';

// Pagination
import Pagination1Example from './examples/Pagination1Example';
import Pagination2Example from './examples/Pagination2Example';
import Pagination3Example from './examples/Pagination3Example';
import Pagination4Example from './examples/Pagination4Example';
import Pagination5Example from './examples/Pagination5Example';
import Pagination6Example from './examples/Pagination6Example';
import Pagination7Example from './examples/Pagination7Example';
import Pagination8Example from './examples/Pagination8Example';
import Pagination9Example from './examples/Pagination9Example';
import Pagination10Example from './examples/Pagination10Example';
import Pagination11Example from './examples/Pagination11Example';
import Pagination12Example from './examples/Pagination12Example';
import Pagination13Example from './examples/Pagination13Example';
import Pagination14Example from './examples/Pagination14Example';
import Pagination15Example from './examples/Pagination15Example';

// Search
import Search1Example from './examples/Search1Example';
import Search2Example from './examples/Search2Example';
import Search3Example from './examples/Search3Example';
import Search4Example from './examples/Search4Example';
import Search5Example from './examples/Search5Example';
import Search6Example from './examples/Search6Example';
import Search7Example from './examples/Search7Example';
import Search8Example from './examples/Search8Example';
import Search9Example from './examples/Search9Example';
import Search10Example from './examples/Search10Example';
import Search11Example from './examples/Search11Example';
import Search12Example from './examples/Search12Example';
import Search13Example from './examples/Search13Example';
import Search14Example from './examples/Search14Example';
import Search15Example from './examples/Search15Example';

// Other components
import DropdownExample from './examples/DropdownExample';
import CircularProgressExample from './examples/CircularProgressExample';
import LinearProgressExample from './examples/LinearProgressExample';
import CheckboxInputExample from './examples/CheckboxInputExample';
import ToggleSwitchExample from './examples/ToggleSwitchExample';
import RadioButtonExample from './examples/RadioButtonExample';

// JavaScript Components
import ButtonJS1Example from './examples/ButtonJS1Example';
import ButtonJS2Example from './examples/ButtonJS2Example';
import ButtonJS3Example from './examples/ButtonJS3Example';
import ButtonJS4Example from './examples/ButtonJS4Example';
import ButtonJS5Example from './examples/ButtonJS5Example';
import ButtonJS6Example from './examples/ButtonJS6Example';
import CardJS1Example from './examples/CardJS1Example';
import CardJS2Example from './examples/CardJS2Example';
import CardJS3Example from './examples/CardJS3Example';
import CardJS4Example from './examples/CardJS4Example';
import CardJS5Example from './examples/CardJS5Example';
import CardJS6Example from './examples/CardJS6Example';
import AlertJS1Example from './examples/AlertJS1Example';
import AlertJS2Example from './examples/AlertJS2Example';
import AlertJS3Example from './examples/AlertJS3Example';
import AlertJS4Example from './examples/AlertJS4Example';
import AlertJS5Example from './examples/AlertJS5Example';
import AlertJS6Example from './examples/AlertJS6Example';
import BadgeJS1Example from './examples/BadgeJS1Example';
import BadgeJS2Example from './examples/BadgeJS2Example';
import BadgeJS3Example from './examples/BadgeJS3Example';
import InputJS1Example from './examples/InputJS1Example';
import InputJS2Example from './examples/InputJS2Example';
import InputJS3Example from './examples/InputJS3Example';
import ModalJS1Example from './examples/ModalJS1Example';
import ModalJS2Example from './examples/ModalJS2Example';
import ModalJS3Example from './examples/ModalJS3Example';
import FormJS1Example from './examples/FormJS1Example';
import FormJS2Example from './examples/FormJS2Example';
import FormJS3Example from './examples/FormJS3Example';
import LoadingJS1Example from './examples/LoadingJS1Example';
import LoadingJS2Example from './examples/LoadingJS2Example';
import LoadingJS3Example from './examples/LoadingJS3Example';
import TableJS1Example from './examples/TableJS1Example';
import TableJS2Example from './examples/TableJS2Example';

// Component mapping by ID
const componentMap: Record<string, React.ComponentType> = {
  'button-1': Button1Example,
  'button-2': Button2Example,
  'button-3': Button3Example,
  'button-4': Button4Example,
  'button-5': Button5Example,
  'button-6': Button6Example,
  'button-7': Button7Example,
  'card-1': Card1Example,
  'card-2': Card2Example,
  'card-3': Card3Example,
  'card-4': Card4Example,
  'card-5': Card5Example,
  'card-6': Card6Example,
  'card-7': Card7Example,
  'alert-1': Alert1Example,
  'alert-2': Alert2Example,
  'alert-3': Alert3Example,
  'alert-4': Alert4Example,
  'alert-5': Alert5Example,
  'alert-6': Alert6Example,

  'badge-1': Badge1Example,
  'badge-2': Badge2Example,
  'badge-3': Badge3Example,
  'badge-4': Badge4Example,
  'badge-5': Badge5Example,
  'badge-6': Badge6Example,
  'input-1': Input1Example,
  'input-2': Input2Example,
  'input-3': Input3Example,
  'input-4': Input4Example,
  'input-5': Input5Example,
  'input-6': Input6Example,
  'modal-1': Modal1Example,
  'modal-2': Modal2Example,
  'modal-3': Modal3Example,
  'modal-4': Modal4Example,
  'modal-5': Modal5Example,
  'modal-6': Modal6Example,
  'modal-7': Modal7Example,
  'modal-8': Modal8Example,
  'modal-9': Modal9Example,
  'modal-10': Modal10Example,
  'modal-11': Modal11Example,
  'modal-12': Modal12Example,
  'modal-13': Modal13Example,
  'modal-14': Modal14Example,
  'modal-15': Modal15Example,
  'nav-1': Nav1Example,
  'nav-2': Nav2Example,
  'nav-3': Nav3Example,
  'nav-4': Nav4Example,
  'nav-5': Nav5Example,
  'nav-6': Nav6Example,
  'nav-7': Nav7Example,
  'nav-8': Nav8Example,
  'nav-9': Nav9Example,
  'nav-10': Nav10Example,
  'nav-11': Nav11Example,
  'nav-12': Nav12Example,
  'nav-13': Nav13Example,
  'nav-14': Nav14Example,
  'nav-15': Nav15Example,
  'table-1': Table1Example,
  'table-2': Table2Example,
  'table-3': Table3Example,
  'table-4': Table4Example,
  'table-5': Table5Example,
  'table-6': Table6Example,
  'table-7': Table7Example,
  'table-8': Table8Example,
  'table-9': Table9Example,
  'table-10': Table10Example,
  'table-11': Table11Example,
  'table-12': Table12Example,
  'table-13': Table13Example,
  'table-14': Table14Example,
  'table-15': Table15Example,
  'form-1': Form1Example,
  'form-2': Form2Example,
  'form-3': Form3Example,
  'form-4': Form4Example,
  'form-5': Form5Example,
  'form-6': Form6Example,
  'form-7': Form7Example,
  'form-8': Form8Example,
  'form-9': Form9Example,
  'form-10': Form10Example,
  'form-11': Form11Example,
  'form-12': Form12Example,
  'form-13': Form13Example,
  'loading-1': Loading1Example,
  'loading-2': Loading2Example,
  'loading-3': Loading3Example,
  'loading-4': Loading4Example,
  'loading-5': Loading5Example,
  'loading-6': Loading6Example,
  'loading-7': Loading7Example,
  'loading-8': Loading8Example,
  'loading-9': Loading9Example,
  'loading-10': Loading10Example,
  'loading-11': Loading11Example,
  'loading-12': Loading12Example,
  'loading-13': Loading13Example,
  'loading-14': Loading14Example,
  'loading-15': Loading15Example,
  'loading-16': Loading16Example,
  'loading-17': Loading17Example,
  'loading-18': Loading18Example,
  'loading-19': Loading19Example,
  'loading-20': Loading20Example,
  'loading-21': Loading21Example,
  'loading-22': Loading22Example,
  'loading-23': Loading23Example,
  'loading-24': Loading24Example,
  'loading-25': Loading25Example,
  'loading-26': Loading26Example,
  'loading-27': Loading27Example,
  'loading-28': Loading28Example,
  'loading-29': Loading29Example,
  'loading-30': Loading30Example,
  'loading-31': Loading31Example,
  'loading-32': Loading32Example,
  'loading-33': Loading33Example,
  'loading-34': Loading34Example,
  'loading-35': Loading35Example,
  'loading-36': Loading36Example,
  'loading-37': Loading37Example,
  'loading-38': Loading38Example,
  'loading-39': Loading39Example,
  'loading-40': Loading40Example,
  'loading-41': Loading41Example,
  'loading-42': Loading42Example,
  'loading-43': Loading43Example,
  'loading-44': Loading44Example,
  'loading-45': Loading45Example,
  'loading-46': Loading46Example,
  'loading-47': Loading47Example,
  'loading-48': Loading48Example,
  'loading-49': Loading49Example,
  'loading-50': Loading50Example,
  'loading-51': Loading51Example,
  'loading-52': Loading52Example,
  'loading-53': Loading53Example,
  'loading-54': Loading54Example,
  'loading-55': Loading55Example,
  'loading-56': Loading56Example,
  'loading-57': Loading57Example,
  'loading-58': Loading58Example,
  'loading-59': Loading59Example,
  'loading-60': Loading60Example,
  'loading-61': Loading61Example,
  'loading-62': Loading62Example,
  'loading-63': Loading63Example,
  'loading-64': Loading64Example,
  'loading-65': Loading65Example,
  'loading-66': Loading66Example,
  'loading-67': Loading67Example,
  'loading-68': Loading68Example,
  'loading-69': Loading69Example,
  'loading-70': Loading70Example,
  'loading-71': Loading71Example,
  'loading-72': Loading72Example,
  'loading-73': Loading73Example,
  'loading-74': Loading74Example,
  'loading-75': Loading75Example,
  'loading-76': Loading76Example,
  'loading-77': Loading77Example,
  'loading-78': Loading78Example,
  'loading-79': Loading79Example,
  'loading-80': Loading80Example,
  'loading-81': Loading81Example,
  'loading-82': Loading82Example,
  'loading-83': Loading83Example,
  'loading-84': Loading84Example,
  'loading-85': Loading85Example,
  'loading-86': Loading86Example,
  'loading-87': Loading87Example,
  'loading-88': Loading88Example,
  'loading-89': Loading89Example,
  'loading-90': Loading90Example,
  'loading-91': Loading91Example,
  'loading-92': Loading92Example,
  'loading-93': Loading93Example,
  'loading-94': Loading94Example,
  'loading-95': Loading95Example,
  'loading-96': Loading96Example,
  'loading-97': Loading97Example,
  'loading-98': Loading98Example,
  'loading-99': Loading99Example,
  'loading-100': Loading100Example,
  'loading-101': Loading101Example,
  'loading-102': Loading102Example,
  'loading-103': Loading103Example,
  'loading-104': Loading104Example,
  'loading-105': Loading105Example,
  'loading-106': Loading106Example,
  'loading-107': Loading107Example,
  'loading-108': Loading108Example,
  'loading-109': Loading109Example,
  'loading-110': Loading110Example,
  'loading-111': Loading111Example,
  'loading-112': Loading112Example,
  'loading-113': Loading113Example,
  'loading-114': Loading114Example,
  'loading-115': Loading115Example,
  'loading-116': Loading116Example,
  'loading-117': Loading117Example,
  'loading-118': Loading118Example,
  'loading-119': Loading119Example,
  'loading-120': Loading120Example,
  'loading-121': Loading121Example,
  'loading-122': Loading122Example,
  'loading-123': Loading123Example,
  'loading-124': Loading124Example,
  'loading-125': Loading125Example,
  'loading-126': Loading126Example,
  'loading-127': Loading127Example,
  'loading-128': Loading128Example,
  'loading-129': Loading129Example,
  'tooltip-1': Tooltip1Example,
  'tooltip-2': Tooltip2Example,
  'tooltip-3': Tooltip3Example,
  'tooltip-4': Tooltip4Example,
  'tooltip-5': Tooltip5Example,
  'tooltip-6': Tooltip6Example,
  'tooltip-7': Tooltip7Example,
  'tooltip-8': Tooltip8Example,
  'tooltip-9': Tooltip9Example,
  'tooltip-10': Tooltip10Example,
  'tooltip-11': Tooltip11Example,
  'tooltip-12': Tooltip12Example,
  'tooltip-13': Tooltip13Example,
  'tooltip-14': Tooltip14Example,
  'tooltip-15': Tooltip15Example,
  'accordion-1': Accordion1Example,
  'accordion-2': Accordion2Example,
  'accordion-3': Accordion3Example,
  'accordion-4': Accordion4Example,
  'accordion-5': Accordion5Example,
  'accordion-6': Accordion6Example,
  'accordion-7': Accordion7Example,
  'accordion-8': Accordion8Example,
  'accordion-9': Accordion9Example,
  'accordion-10': Accordion10Example,
  'accordion-11': Accordion11Example,
  'accordion-12': Accordion12Example,
  'accordion-13': Accordion13Example,
  'accordion-14': Accordion14Example,
  'accordion-15': Accordion15Example,
  'carousel-1': Carousel1Example,
  'carousel-2': Carousel2Example,
  'carousel-3': Carousel3Example,
  'carousel-4': Carousel4Example,
  'carousel-5': Carousel5Example,
  'carousel-6': Carousel6Example,
  'carousel-7': Carousel7Example,
  'carousel-8': Carousel8Example,
  'carousel-9': Carousel9Example,
  'carousel-10': Carousel10Example,
  'carousel-11': Carousel11Example,
  'carousel-12': Carousel12Example,
  'carousel-13': Carousel13Example,
  'carousel-14': Carousel14Example,
  'carousel-15': Carousel15Example,
  'timeline-1': Timeline1Example,
  'timeline-2': Timeline2Example,
  'timeline-3': Timeline3Example,
  'timeline-4': Timeline4Example,
  'timeline-5': Timeline5Example,
  'timeline-6': Timeline6Example,
  'timeline-7': Timeline7Example,
  'timeline-8': Timeline8Example,
  'timeline-9': Timeline9Example,
  'timeline-10': Timeline10Example,
  'timeline-11': Timeline11Example,
  'timeline-12': Timeline12Example,
  'timeline-13': Timeline13Example,
  'timeline-14': Timeline14Example,
  'timeline-15': Timeline15Example,
  'stats-1': Stats1Example,
  'stats-2': Stats2Example,
  'stats-3': Stats3Example,
  'stats-4': Stats4Example,
  'stats-5': Stats5Example,
  'stats-6': Stats6Example,
  'stats-7': Stats7Example,
  'stats-8': Stats8Example,
  'stats-9': Stats9Example,
  'stats-10': Stats10Example,
  'stats-11': Stats11Example,
  'stats-12': Stats12Example,
  'stats-13': Stats13Example,
  'stats-14': Stats14Example,
  'stats-15': Stats15Example,
  'notification-1': Notification1Example,
  'notification-2': Notification2Example,
  'notification-3': Notification3Example,
  'notification-4': Notification4Example,
  'notification-5': Notification5Example,
  'notification-6': Notification6Example,
  'notification-7': Notification7Example,
  'notification-8': Notification8Example,
  'pagination-1': Pagination1Example,
  'pagination-2': Pagination2Example,
  'pagination-3': Pagination3Example,
  'pagination-4': Pagination4Example,
  'pagination-5': Pagination5Example,
  'pagination-6': Pagination6Example,
  'pagination-7': Pagination7Example,
  'pagination-8': Pagination8Example,
  'pagination-9': Pagination9Example,
  'pagination-10': Pagination10Example,
  'pagination-11': Pagination11Example,
  'pagination-12': Pagination12Example,
  'pagination-13': Pagination13Example,
  'pagination-14': Pagination14Example,
  'pagination-15': Pagination15Example,
  'search-1': Search1Example,
  'search-2': Search2Example,
  'search-3': Search3Example,
  'search-4': Search4Example,
  'search-5': Search5Example,
  'search-6': Search6Example,
  'search-7': Search7Example,
  'search-8': Search8Example,
  'search-9': Search9Example,
  'search-10': Search10Example,
  'search-11': Search11Example,
  'search-12': Search12Example,
  'search-13': Search13Example,
  'search-14': Search14Example,
  'search-15': Search15Example,
  'dropdown': DropdownExample,
  'circular-progress': CircularProgressExample,
  'linear-progress': LinearProgressExample,
  'checkbox-input': CheckboxInputExample,
  'toggle-switch': ToggleSwitchExample,
  'radio-button': RadioButtonExample,

  // JavaScript Components
  'button-js-1': ButtonJS1Example,
  'button-js-2': ButtonJS2Example,
  'button-js-3': ButtonJS3Example,
  'button-js-4': ButtonJS4Example,
  'button-js-5': ButtonJS5Example,
  'button-js-6': ButtonJS6Example,
  'card-js-1': CardJS1Example,
  'card-js-2': CardJS2Example,
  'card-js-3': CardJS3Example,
  'card-js-4': CardJS4Example,
  'card-js-5': CardJS5Example,
  'card-js-6': CardJS6Example,
  'alert-js-1': AlertJS1Example,
  'alert-js-2': AlertJS2Example,
  'alert-js-3': AlertJS3Example,
  'alert-js-4': AlertJS4Example,
  'alert-js-5': AlertJS5Example,
  'alert-js-6': AlertJS6Example,
  'badge-js-1': BadgeJS1Example,
  'badge-js-2': BadgeJS2Example,
  'badge-js-3': BadgeJS3Example,
  'input-js-1': InputJS1Example,
  'input-js-2': InputJS2Example,
  'input-js-3': InputJS3Example,
  'modal-js-1': ModalJS1Example,
  'modal-js-2': ModalJS2Example,
  'modal-js-3': ModalJS3Example,
  'form-js-1': FormJS1Example,
  'form-js-2': FormJS2Example,
  'form-js-3': FormJS3Example,
  'loading-js-1': LoadingJS1Example,
  'loading-js-2': LoadingJS2Example,
  'loading-js-3': LoadingJS3Example,
  'table-js-1': TableJS1Example,
  'table-js-2': TableJS2Example,
};

const TECHNOLOGIES = ['JavaScript', 'TypeScript', 'React', 'Vite', 'Astro'];

export default function ComponentGallery() {
  const components = componentsData;
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string>('All');

  // Get unique categories for filters
  const componentCategories = useMemo(() => {
    const categories = Array.from(new Set(components.map(comp => comp.category)));
    return ['All', ...categories.sort()];
  }, [components]);

  const filteredComponents = useMemo(() => {
    const filtered = components.filter((component) => {
      const matchesTechnology = !selectedTechnology || component.technologies.includes(selectedTechnology);
      const matchesComponent = selectedComponent === 'All' || component.category === selectedComponent;
      return matchesTechnology && matchesComponent;
    });

    // Randomize order when "All" is selected
    if (selectedComponent === 'All') {
      return [...filtered].sort(() => Math.random() - 0.5);
    }

    return filtered;
  }, [components, selectedTechnology, selectedComponent]);

  return (
    <div>
      {/* Technology Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        {TECHNOLOGIES.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTechnology(selectedTechnology === tech ? null : tech)}
            className={`flex flex-col items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group cursor-pointer min-w-[100px] ${
              selectedTechnology === tech
                ? 'bg-blue-600/30 border-2 border-blue-500/70'
                : 'bg-slate-800/40 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50'
            }`}
          >
            <TechIcon name={tech} isActive={selectedTechnology === tech} />
            <span className={`text-xs font-medium transition-colors ${
              selectedTechnology === tech ? 'text-blue-300' : 'text-slate-400 group-hover:text-slate-200'
            }`}>
              {tech}
            </span>
          </button>
        ))}
      </div>

      {/* Component Category Filters */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {componentCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedComponent(category)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
              selectedComponent === category
                ? 'bg-blue-600/40 text-blue-200 border border-blue-500/50'
                : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 border border-slate-700/30 hover:border-slate-600/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Components Grid - Masonry Layout */}
      {filteredComponents.length > 0 ? (
        <div
          className="w-full"
          style={{
            columnCount: 1,
            columnGap: '2rem',
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .masonry-container {
                column-count: 2;
              }
            }
            @media (min-width: 1280px) {
              .masonry-container {
                column-count: 3;
              }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 2rem;
              display: inline-block;
              width: 100%;
            }
          `}</style>
          <div className="masonry-container">
            {filteredComponents.map((item, index) => {
              const Component = componentMap[item.id];
              const gridSize = item.gridSize || 'normal';
              // Limit delay to max 150ms after first 6 items
              const delay = Math.min(index * 25, 150);

              return (
                <div key={item.id} className="masonry-item">
                  <LazyCard delay={delay}>
                    <ComponentCard
                      title={item.title}
                      description={item.description}
                      code={item.code}
                      category={item.category}
                      technologies={item.technologies}
                      gridSize={gridSize}
                    >
                      {Component && <Component />}
                    </ComponentCard>
                  </LazyCard>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-800/50 border border-slate-700/50">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-slate-400 text-base font-medium">No se encontraron componentes con estos filtros</p>
          <p className="text-slate-500 text-sm mt-2">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  );
}

// Tech Icon Component
function TechIcon({ name, isActive }: { name: string; isActive: boolean }) {
  const activeClass = isActive ? 'scale-110' : 'group-hover:scale-110';
  const transitionClass = 'transition-transform';

  switch (name) {
    case 'HTML + CSS':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 452 520">
          <path fill="#E34F26" d="M41 460L0 0h451l-41 460-185 52"/>
          <path fill="#EF652A" d="M226 472l149-41 35-394H226"/>
          <path fill="#EBEBEB" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
          <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#F7DF1E"/>
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#3178C6"/>
          <path fill="#FFF" d="M56.612 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.203l-44.739.122-.122 10.443Zm149.955-10.742c6.501 1.625 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.111 6.136 8.208.08.325-11.053 7.802-17.798 11.988-.244.162-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.867-12.028-7.233-7.76-.528-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.536 4.876 5.649 14.832 9.956 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.879-28.323 20.276-4.388.772-14.79.65-19.504-.203-10.28-1.828-20.033-6.908-26.047-13.572-2.357-2.6-6.949-9.387-6.664-9.874.122-.163 1.178-.813 2.356-1.504 1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267 1.544 2.276c2.154 3.29 6.867 7.801 9.712 9.305 8.167 4.307 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.501-1.99-2.845-6.054-5.242-17.595-10.24-13.206-5.69-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.617-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.659 26.25-24.3 4.51-.853 14.994-.528 19.424.569Z"/>
        </svg>
      );
    case 'React':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="-11.5 -10.232 23 20.463">
          <circle r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'Vite':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 257">
          <defs>
            <linearGradient id="viteLogo1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stopColor="#41D1FF"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
            <linearGradient id="viteLogo2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
              <stop offset="0%" stopColor="#FFEA83"/>
              <stop offset="8.333%" stopColor="#FFDD35"/>
              <stop offset="100%" stopColor="#FFA800"/>
            </linearGradient>
          </defs>
          <path fill="url(#viteLogo1)" d="m255.153 37.938-134.897 236.241c-1.654 2.898-5.78 2.898-7.434 0L-.275 37.938c-1.753-3.072.393-6.875 3.88-6.875L251.273 31.063c3.487 0 5.633 3.803 3.88 6.875Z"/>
          <path fill="url(#viteLogo2)" d="m135.072 0 105.276 186.064-1.431 2.51-133.69-73.485a6.63 6.63 0 0 1-3.228-5.717V18.056c0-4.915 5.913-7.337 9.373-3.838l23.7 27.782Z"/>
        </svg>
      );
    case 'Astro':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 366">
          <defs>
            <linearGradient id="astroLogo" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF"/>
              <stop offset="100%" stopColor="#FFF" stopOpacity=".5"/>
            </linearGradient>
          </defs>
          <path fill="url(#astroLogo)" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/>
          <path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"/>
        </svg>
      );
    default:
      return null;
  }
}
