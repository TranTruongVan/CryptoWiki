import React, { useState } from 'react';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../services/cryptoApi';
import HTMLReactParser from 'html-react-parser';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import millify from 'millify';
import LineChart from '../LineChart/LineChart';

const coinHistory = {
  status: 'success',
  data: {
    change: '3.65',
    history: [
      {
        price: '23847.119432487063',
        timestamp: 1675359600,
      },
      {
        price: '23896.78135550982',
        timestamp: 1675359300,
      },
      {
        price: '23826.761517070758',
        timestamp: 1675359000,
      },
      {
        price: '23843.609009238375',
        timestamp: 1675358700,
      },
      {
        price: '23812.924597493417',
        timestamp: 1675358400,
      },
      {
        price: '23842.640863971654',
        timestamp: 1675358100,
      },
      {
        price: '23791.74088374171',
        timestamp: 1675357800,
      },
      {
        price: '23835.154183403178',
        timestamp: 1675357500,
      },
      {
        price: '23793.52051340215',
        timestamp: 1675357200,
      },
      {
        price: '23831.79807472958',
        timestamp: 1675356900,
      },
      {
        price: '23792.711631841106',
        timestamp: 1675356600,
      },
      {
        price: '23871.70434852934',
        timestamp: 1675356300,
      },
      {
        price: '23779.447186384805',
        timestamp: 1675356000,
      },
      {
        price: '23870.454099072896',
        timestamp: 1675355700,
      },
      {
        price: '23823.56471801393',
        timestamp: 1675355400,
      },
      {
        price: '23854.28186888208',
        timestamp: 1675355100,
      },
      {
        price: '23778.753514128744',
        timestamp: 1675354800,
      },
      {
        price: '23811.890230253048',
        timestamp: 1675354500,
      },
      {
        price: '23806.902712093197',
        timestamp: 1675354200,
      },
      {
        price: '23863.181705501025',
        timestamp: 1675353900,
      },
      {
        price: '23787.539486202724',
        timestamp: 1675353600,
      },
      {
        price: '23880.981954154944',
        timestamp: 1675353300,
      },
      {
        price: '23799.931369578626',
        timestamp: 1675353000,
      },
      {
        price: '23800.70329925601',
        timestamp: 1675352700,
      },
      {
        price: '23758.576224809804',
        timestamp: 1675352400,
      },
      {
        price: '23771.930942149622',
        timestamp: 1675352100,
      },
      {
        price: '23742.37539367352',
        timestamp: 1675351800,
      },
      {
        price: '23709.841985181007',
        timestamp: 1675351500,
      },
      {
        price: '23757.433737881784',
        timestamp: 1675351200,
      },
      {
        price: '23688.970324494523',
        timestamp: 1675350900,
      },
      {
        price: '23659.99456801032',
        timestamp: 1675350600,
      },
      {
        price: '23798.01217950651',
        timestamp: 1675350300,
      },
      {
        price: '23663.21699641566',
        timestamp: 1675350000,
      },
      {
        price: '23765.6253696262',
        timestamp: 1675349700,
      },
      {
        price: '23818.812184209237',
        timestamp: 1675349400,
      },
      {
        price: '23821.5172650925',
        timestamp: 1675349100,
      },
      {
        price: '23815.98534073328',
        timestamp: 1675348800,
      },
      {
        price: '23869.714370790145',
        timestamp: 1675348500,
      },
      {
        price: '23859.269575628907',
        timestamp: 1675348200,
      },
      {
        price: '23860.828883663755',
        timestamp: 1675347900,
      },
      {
        price: '23865.053244226325',
        timestamp: 1675347600,
      },
      {
        price: '23799.247458674567',
        timestamp: 1675347300,
      },
      {
        price: '23813.088697102594',
        timestamp: 1675347000,
      },
      {
        price: '23781.730712885183',
        timestamp: 1675346700,
      },
      {
        price: '23798.658754008837',
        timestamp: 1675346400,
      },
      {
        price: '23768.84748542204',
        timestamp: 1675346100,
      },
      {
        price: '23763.78510557862',
        timestamp: 1675345800,
      },
      {
        price: '23788.855479722763',
        timestamp: 1675345500,
      },
      {
        price: '23792.422150078935',
        timestamp: 1675345200,
      },
      {
        price: '23777.24446179712',
        timestamp: 1675344900,
      },
      {
        price: '23803.377155196715',
        timestamp: 1675344600,
      },
      {
        price: '23823.866802174256',
        timestamp: 1675344300,
      },
      {
        price: '23797.83491937585',
        timestamp: 1675344000,
      },
      {
        price: '23793.463430433687',
        timestamp: 1675343700,
      },
      {
        price: '23795.41397534822',
        timestamp: 1675343400,
      },
      {
        price: '23792.72262217538',
        timestamp: 1675343100,
      },
      {
        price: '23814.78312870096',
        timestamp: 1675342800,
      },
      {
        price: '23796.77459549733',
        timestamp: 1675342500,
      },
      {
        price: '23822.421002063507',
        timestamp: 1675342200,
      },
      {
        price: '23787.6828070322',
        timestamp: 1675341900,
      },
      {
        price: '23804.86922409952',
        timestamp: 1675341600,
      },
      {
        price: '23816.73254533503',
        timestamp: 1675341300,
      },
      {
        price: '23824.024979165446',
        timestamp: 1675341000,
      },
      {
        price: '23818.870915563624',
        timestamp: 1675340700,
      },
      {
        price: '23807.643080122347',
        timestamp: 1675340400,
      },
      {
        price: '23827.706694377528',
        timestamp: 1675340100,
      },
      {
        price: '23820.30481324279',
        timestamp: 1675339800,
      },
      {
        price: '23803.116744621413',
        timestamp: 1675339500,
      },
      {
        price: '23836.31001073949',
        timestamp: 1675339200,
      },
      {
        price: '23812.113730709534',
        timestamp: 1675338900,
      },
      {
        price: '23829.61990414631',
        timestamp: 1675338600,
      },
      {
        price: '23830.901172196176',
        timestamp: 1675338300,
      },
      {
        price: '23834.048036728298',
        timestamp: 1675338000,
      },
      {
        price: '23818.634427239645',
        timestamp: 1675337700,
      },
      {
        price: '23833.818917753943',
        timestamp: 1675337400,
      },
      {
        price: '23809.914113239938',
        timestamp: 1675337100,
      },
      {
        price: '23811.64039099717',
        timestamp: 1675336800,
      },
      {
        price: '23812.80393090784',
        timestamp: 1675336500,
      },
      {
        price: '23811.687802878605',
        timestamp: 1675336200,
      },
      {
        price: '23806.233608064555',
        timestamp: 1675335900,
      },
      {
        price: '23793.24479011233',
        timestamp: 1675335600,
      },
      {
        price: '23807.78263904081',
        timestamp: 1675335300,
      },
      {
        price: '23799.2975389527',
        timestamp: 1675335000,
      },
      {
        price: '23816.162973054932',
        timestamp: 1675334700,
      },
      {
        price: '23805.177706080198',
        timestamp: 1675334400,
      },
      {
        price: '23792.11634527973',
        timestamp: 1675334100,
      },
      {
        price: '23819.512703392094',
        timestamp: 1675333800,
      },
      {
        price: '23810.307226390156',
        timestamp: 1675333500,
      },
      {
        price: '23819.38491921014',
        timestamp: 1675333200,
      },
      {
        price: '23806.667102447103',
        timestamp: 1675332900,
      },
      {
        price: '23816.20613995535',
        timestamp: 1675332600,
      },
      {
        price: '23806.666763088015',
        timestamp: 1675332300,
      },
      {
        price: '23825.13727093344',
        timestamp: 1675332000,
      },
      {
        price: '23819.621490683236',
        timestamp: 1675331700,
      },
      {
        price: '23807.966013921632',
        timestamp: 1675331400,
      },
      {
        price: '23806.972811516738',
        timestamp: 1675331100,
      },
      {
        price: '23801.59780086662',
        timestamp: 1675330800,
      },
      {
        price: '23803.296642454457',
        timestamp: 1675330500,
      },
      {
        price: '23800.927349994803',
        timestamp: 1675330200,
      },
      {
        price: '23784.436543359356',
        timestamp: 1675329900,
      },
      {
        price: '23786.7635893357',
        timestamp: 1675329600,
      },
      {
        price: '23790.732545214174',
        timestamp: 1675329300,
      },
      {
        price: '23796.246808927976',
        timestamp: 1675329000,
      },
      {
        price: '23805.632902085243',
        timestamp: 1675328700,
      },
      {
        price: '23811.17874755524',
        timestamp: 1675328400,
      },
      {
        price: '23805.4652233097',
        timestamp: 1675328100,
      },
      {
        price: '23818.187741704114',
        timestamp: 1675327800,
      },
      {
        price: '23793.44421876518',
        timestamp: 1675327500,
      },
      {
        price: '23823.298228730786',
        timestamp: 1675327200,
      },
      {
        price: '23794.67748944777',
        timestamp: 1675326900,
      },
      {
        price: '23848.022268375484',
        timestamp: 1675326600,
      },
      {
        price: '23820.36146834823',
        timestamp: 1675326300,
      },
      {
        price: '23833.30903318562',
        timestamp: 1675326000,
      },
      {
        price: '23800.497951890535',
        timestamp: 1675325700,
      },
      {
        price: '23829.645198873775',
        timestamp: 1675325400,
      },
      {
        price: '23810.37381433944',
        timestamp: 1675325100,
      },
      {
        price: '23807.947234128922',
        timestamp: 1675324800,
      },
      {
        price: '23802.218033412682',
        timestamp: 1675324500,
      },
      {
        price: '23791.527225078007',
        timestamp: 1675324200,
      },
      {
        price: '23798.450532449206',
        timestamp: 1675323900,
      },
      {
        price: '23802.758735122577',
        timestamp: 1675323600,
      },
      {
        price: '23807.845180684042',
        timestamp: 1675323300,
      },
      {
        price: '23828.28994999666',
        timestamp: 1675323000,
      },
      {
        price: '23820.91307771867',
        timestamp: 1675322700,
      },
      {
        price: '23825.51821758974',
        timestamp: 1675322400,
      },
      {
        price: '23832.574711323166',
        timestamp: 1675322100,
      },
      {
        price: '23810.37998154901',
        timestamp: 1675321800,
      },
      {
        price: '23827.071786031483',
        timestamp: 1675321500,
      },
      {
        price: '23819.468604184407',
        timestamp: 1675321200,
      },
      {
        price: '23803.72666474026',
        timestamp: 1675320900,
      },
      {
        price: '23811.887638149838',
        timestamp: 1675320600,
      },
      {
        price: '23826.89503081423',
        timestamp: 1675320300,
      },
      {
        price: '23809.79894121615',
        timestamp: 1675320000,
      },
      {
        price: '23793.058425168332',
        timestamp: 1675319700,
      },
      {
        price: '23832.681473930512',
        timestamp: 1675319400,
      },
      {
        price: '23751.427520624675',
        timestamp: 1675319100,
      },
      {
        price: '23821.784800296584',
        timestamp: 1675318800,
      },
      {
        price: '23786.62742388643',
        timestamp: 1675318500,
      },
      {
        price: '23814.97729033343',
        timestamp: 1675318200,
      },
      {
        price: '23866.612613793524',
        timestamp: 1675317900,
      },
      {
        price: '23825.647217767393',
        timestamp: 1675317600,
      },
      {
        price: '23857.97682359677',
        timestamp: 1675317300,
      },
      {
        price: '23865.966242928993',
        timestamp: 1675317000,
      },
      {
        price: '23871.08249314656',
        timestamp: 1675316700,
      },
      {
        price: '23860.97770536823',
        timestamp: 1675316400,
      },
      {
        price: '23873.654381351676',
        timestamp: 1675316100,
      },
      {
        price: '23864.27156966984',
        timestamp: 1675315800,
      },
      {
        price: '23888.44154276104',
        timestamp: 1675315500,
      },
      {
        price: '23864.447455857593',
        timestamp: 1675315200,
      },
      {
        price: '23916.599736062886',
        timestamp: 1675314900,
      },
      {
        price: '23889.391915029708',
        timestamp: 1675314600,
      },
      {
        price: '23906.37532116991',
        timestamp: 1675314300,
      },
      {
        price: '23881.05031382086',
        timestamp: 1675314000,
      },
      {
        price: '23894.313289220354',
        timestamp: 1675313700,
      },
      {
        price: '23905.18954152865',
        timestamp: 1675313400,
      },
      {
        price: '23889.641237549175',
        timestamp: 1675313100,
      },
      {
        price: '23905.29835307582',
        timestamp: 1675312800,
      },
      {
        price: '23877.385247153758',
        timestamp: 1675312500,
      },
      {
        price: '23894.447094515406',
        timestamp: 1675312200,
      },
      {
        price: '23894.188486276955',
        timestamp: 1675311900,
      },
      {
        price: '23893.715289926495',
        timestamp: 1675311600,
      },
      {
        price: '23874.231683421112',
        timestamp: 1675311300,
      },
      {
        price: '23870.04207537037',
        timestamp: 1675311000,
      },
      {
        price: '23875.131844014606',
        timestamp: 1675310700,
      },
      {
        price: '23885.72329417648',
        timestamp: 1675310400,
      },
      {
        price: '23887.02587493435',
        timestamp: 1675310100,
      },
      {
        price: '23906.28770303755',
        timestamp: 1675309800,
      },
      {
        price: '23919.361621525888',
        timestamp: 1675309500,
      },
      {
        price: '23916.575944612505',
        timestamp: 1675309200,
      },
      {
        price: '23907.43702538591',
        timestamp: 1675308900,
      },
      {
        price: '23911.565807016217',
        timestamp: 1675308600,
      },
      {
        price: '23879.68724995817',
        timestamp: 1675308300,
      },
      {
        price: '23884.102865591478',
        timestamp: 1675308000,
      },
      {
        price: '23916.43638140103',
        timestamp: 1675307700,
      },
      {
        price: '23880.062317937514',
        timestamp: 1675307400,
      },
      {
        price: '23918.541510483687',
        timestamp: 1675307100,
      },
      {
        price: '23899.608451024575',
        timestamp: 1675306800,
      },
      {
        price: '23921.52791419558',
        timestamp: 1675306500,
      },
      {
        price: '23903.328755511156',
        timestamp: 1675306200,
      },
      {
        price: '23929.880034934056',
        timestamp: 1675305900,
      },
      {
        price: '23890.27053468769',
        timestamp: 1675305600,
      },
      {
        price: '23884.689417223508',
        timestamp: 1675305300,
      },
      {
        price: '23943.28022324637',
        timestamp: 1675305000,
      },
      {
        price: '23888.22862774344',
        timestamp: 1675304700,
      },
      {
        price: '23934.683721931255',
        timestamp: 1675304400,
      },
      {
        price: '23935.64673460449',
        timestamp: 1675304100,
      },
      {
        price: '23938.326669746315',
        timestamp: 1675303800,
      },
      {
        price: '23963.08443736534',
        timestamp: 1675303500,
      },
      {
        price: '23952.912803394847',
        timestamp: 1675303200,
      },
      {
        price: '23935.75593045087',
        timestamp: 1675302900,
      },
      {
        price: '23959.141735801877',
        timestamp: 1675302600,
      },
      {
        price: '23961.017124374077',
        timestamp: 1675302300,
      },
      {
        price: '23950.539031807395',
        timestamp: 1675302000,
      },
      {
        price: '23956.697508082365',
        timestamp: 1675301700,
      },
      {
        price: '23956.75195310966',
        timestamp: 1675301400,
      },
      {
        price: '24015.158420804735',
        timestamp: 1675301100,
      },
      {
        price: '24008.503622561362',
        timestamp: 1675300800,
      },
      {
        price: '23970.819170142757',
        timestamp: 1675300500,
      },
      {
        price: '23965.229634106505',
        timestamp: 1675300200,
      },
      {
        price: '24010.108374982978',
        timestamp: 1675299900,
      },
      {
        price: '23975.762585479486',
        timestamp: 1675299600,
      },
      {
        price: '24078.957502512836',
        timestamp: 1675299300,
      },
      {
        price: '23909.542711917315',
        timestamp: 1675299000,
      },
      {
        price: '24013.237113964748',
        timestamp: 1675298700,
      },
      {
        price: '23783.634799057596',
        timestamp: 1675298400,
      },
      {
        price: '23767.08199102825',
        timestamp: 1675298100,
      },
      {
        price: '23691.689929698186',
        timestamp: 1675297800,
      },
      {
        price: '23765.741882835762',
        timestamp: 1675297500,
      },
      {
        price: '23702.038877432893',
        timestamp: 1675297200,
      },
      {
        price: '23717.918705413034',
        timestamp: 1675296900,
      },
      {
        price: '23712.212133706',
        timestamp: 1675296600,
      },
      {
        price: '23699.250581848617',
        timestamp: 1675296300,
      },
      {
        price: '23711.282683363133',
        timestamp: 1675296000,
      },
      {
        price: '23694.46736700892',
        timestamp: 1675295700,
      },
      {
        price: '23695.825902937002',
        timestamp: 1675295400,
      },
      {
        price: '23708.555659470447',
        timestamp: 1675295100,
      },
      {
        price: '23685.983279385986',
        timestamp: 1675294800,
      },
      {
        price: '23703.716937496443',
        timestamp: 1675294500,
      },
      {
        price: '23697.24591037519',
        timestamp: 1675294200,
      },
      {
        price: '23732.98852792634',
        timestamp: 1675293900,
      },
      {
        price: '23696.525146497646',
        timestamp: 1675293600,
      },
      {
        price: '23729.967498025067',
        timestamp: 1675293300,
      },
      {
        price: '23665.516939656',
        timestamp: 1675293000,
      },
      {
        price: '23701.581180905247',
        timestamp: 1675292700,
      },
      {
        price: '23686.166408923535',
        timestamp: 1675292400,
      },
      {
        price: '23649.00464647019',
        timestamp: 1675292100,
      },
      {
        price: '23690.75426863694',
        timestamp: 1675291800,
      },
      {
        price: '23628.467156593866',
        timestamp: 1675291500,
      },
      {
        price: '23651.61303808296',
        timestamp: 1675291200,
      },
      {
        price: '23666.715158861596',
        timestamp: 1675290900,
      },
      {
        price: '23635.727156281915',
        timestamp: 1675290600,
      },
      {
        price: '23689.822236326632',
        timestamp: 1675290300,
      },
      {
        price: '23642.7623045479',
        timestamp: 1675290000,
      },
      {
        price: '23681.89350176763',
        timestamp: 1675289700,
      },
      {
        price: '23626.41952346874',
        timestamp: 1675289400,
      },
      {
        price: '23657.279507820585',
        timestamp: 1675289100,
      },
      {
        price: '23602.442333351584',
        timestamp: 1675288800,
      },
      {
        price: '23636.104349122746',
        timestamp: 1675288500,
      },
      {
        price: '23575.547295619726',
        timestamp: 1675288200,
      },
      {
        price: '23604.672145774086',
        timestamp: 1675287900,
      },
      {
        price: '23623.339699303397',
        timestamp: 1675287600,
      },
      {
        price: '23621.056944874657',
        timestamp: 1675287300,
      },
      {
        price: '23600.232769818507',
        timestamp: 1675287000,
      },
      {
        price: '23553.713927652876',
        timestamp: 1675286700,
      },
      {
        price: '23646.468271142014',
        timestamp: 1675286400,
      },
      {
        price: '23485.371004074605',
        timestamp: 1675286100,
      },
      {
        price: '23615.975987283924',
        timestamp: 1675285800,
      },
      {
        price: '23454.50595026657',
        timestamp: 1675285500,
      },
      {
        price: '23465.033062186925',
        timestamp: 1675285200,
      },
      {
        price: '23405.135919164455',
        timestamp: 1675284900,
      },
      {
        price: '23400.63544470187',
        timestamp: 1675284600,
      },
      {
        price: '23443.15693559922',
        timestamp: 1675284300,
      },
      {
        price: '23409.72907609323',
        timestamp: 1675284000,
      },
      {
        price: '23409.17903734914',
        timestamp: 1675283700,
      },
      {
        price: '23388.47663616361',
        timestamp: 1675283400,
      },
      {
        price: '23295.74016985517',
        timestamp: 1675283100,
      },
      {
        price: '23250.106361587063',
        timestamp: 1675282800,
      },
      {
        price: '23277.228125248574',
        timestamp: 1675282500,
      },
      {
        price: '23235.922580300376',
        timestamp: 1675282200,
      },
      {
        price: '23324.524129876485',
        timestamp: 1675281900,
      },
      {
        price: '23212.190721548737',
        timestamp: 1675281600,
      },
      {
        price: '23269.053051526404',
        timestamp: 1675281300,
      },
      {
        price: '23227.908656590887',
        timestamp: 1675281000,
      },
      {
        price: '23098.181648215523',
        timestamp: 1675280700,
      },
      {
        price: '23208.594217447488',
        timestamp: 1675280400,
      },
      {
        price: '22877.880861096033',
        timestamp: 1675280100,
      },
      {
        price: '23037.642358803954',
        timestamp: 1675279800,
      },
      {
        price: '23010.798691329885',
        timestamp: 1675279500,
      },
      {
        price: '23046.444138953742',
        timestamp: 1675279200,
      },
      {
        price: '23037.59911149017',
        timestamp: 1675278900,
      },
      {
        price: '23080.49454879682',
        timestamp: 1675278600,
      },
      {
        price: '23049.314890748625',
        timestamp: 1675278300,
      },
      {
        price: '23030.754926406997',
        timestamp: 1675278000,
      },
      {
        price: '23073.58349333948',
        timestamp: 1675277700,
      },
      {
        price: '23038.229523417212',
        timestamp: 1675277400,
      },
      {
        price: '23043.466438601034',
        timestamp: 1675277100,
      },
      {
        price: '23074.049053377457',
        timestamp: 1675276800,
      },
      {
        price: '23015.595032099045',
        timestamp: 1675276500,
      },
      {
        price: '23114.180880138996',
        timestamp: 1675276200,
      },
      {
        price: '23015.47601372846',
        timestamp: 1675275900,
      },
      {
        price: '23024.358232989158',
        timestamp: 1675275600,
      },
      {
        price: '23019.242215565475',
        timestamp: 1675275300,
      },
      {
        price: '22984.277291609065',
        timestamp: 1675275000,
      },
      {
        price: '23030.510495871105',
        timestamp: 1675274700,
      },
      {
        price: '23027.597965987155',
        timestamp: 1675274400,
      },
      {
        price: '23018.046211006982',
        timestamp: 1675274100,
      },
      {
        price: '23021.549321106846',
        timestamp: 1675273800,
      },
      {
        price: '23025.21981992657',
        timestamp: 1675273500,
      },
    ],
  },
};

const CryptoDetail = () => {
  // const { coinId } = useParams();
  // const [timePeriod, setTimePeriod] = useState('7d');
  // const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  // const cryptoDetails = data?.data?.coin;
  // const { data: coinHistory } = useGetCryptoHistoryQuery({
  //   coinId,
  //   timePeriod,
  // });
  const cryptoDetails = {
    uuid: 'Qwsogvtv82FCd',
    symbol: 'BTC',
    name: 'Bitcoin',
    description:
      '<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href="https://coinranking.com/blog/how-to-buy-your-first-bitcoin/" rel="nofollow noopener" target="_blank">this blog article</a> on how to buy your first bitcoin.</p>\n',
    color: '#f7931A',
    iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
    websiteUrl: 'https://bitcoin.org',
    links: [
      {
        name: 'bitcoin.org',
        type: 'website',
        url: 'https://bitcoin.org',
      },
      {
        name: 'bitcoinmagazine.com',
        url: 'https://bitcoinmagazine.com/',
        type: 'website',
      },
      {
        name: 'bitcointalk.org',
        url: 'https://bitcointalk.org/',
        type: 'bitcointalk',
      },
      {
        name: 'blockchain.com',
        url: 'https://www.blockchain.com/explorer',
        type: 'explorer',
      },
      {
        name: 'bitcoin/bitcoin',
        url: 'https://github.com/bitcoin/bitcoin',
        type: 'github',
      },
      {
        name: 'r/bitcoin',
        url: 'https://www.reddit.com/r/bitcoin/',
        type: 'reddit',
      },
      {
        name: 'Bitcoin_Magazine',
        url: 'https://t.me/Bitcoin_Magazine',
        type: 'telegram',
      },
      {
        name: 'bitcoin',
        url: 'https://t.me/bitcoin',
        type: 'telegram',
      },
      {
        name: 'Bitcoin Whitepaper',
        url: 'https://bitcoin.org/bitcoin.pdf',
        type: 'whitepaper',
      },
    ],
    supply: {
      confirmed: true,
      supplyAt: 1669711321,
      max: '21000000',
      total: '19219662',
      circulating: '19219662',
    },
    numberOfMarkets: 4531,
    numberOfExchanges: 147,
    '24hVolume': '40539331692',
    marketCap: '457441472774',
    fullyDilutedMarketCap: '499814769284',
    price: '23800.70329925601',
    btcPrice: '1',
    priceAt: 1675352640,
    change: '3.19',
    rank: 1,
    sparkline: [
      '23051.647605192044',
      '23025.013555648195',
      '23032.99187534244',
      '23051.40932070488',
      '23315.07249031963',
      '23542.040176316965',
      '23642.952104171294',
      '23696.025703275318',
      '23749.237895886632',
      '23980.443367050044',
      '23929.143586754828',
      '23903.83193277833',
      '23888.615033948645',
      '23890.927304836197',
      '23835.50657733576',
      '23817.635278959406',
      '23809.31749805115',
      '23813.19153121425',
      '23803.370815667186',
      '23807.601716864418',
      '23819.67438776585',
      '23814.983432346362',
      '23797.438135317832',
      '23818.925888826514',
      '23743.530946334133',
    ],
    allTimeHigh: {
      price: '68763.41083248306',
      timestamp: 1636502400,
    },
    coinrankingUrl: 'https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc',
    tier: 1,
    lowVolume: false,
    listedAt: 1330214400,
    hasContent: true,
    notices: null,
    tags: ['layer-1', 'proof-of-work'],
  };

  // if(isFetching){
  //   return "Loading...";
  // }

  const time = [
    {
      value: '3h',
      label: '3 Hours',
    },
    {
      value: '24h',
      label: '24 Hours',
    },
    {
      value: '7d',
      label: '7 Days',
    },
    {
      value: '30d',
      label: '30 Days',
    },
    {
      value: '3m',
      label: '3 Months',
    },
    {
      value: '1y',
      label: '1 Year',
    },
    {
      value: '3y',
      label: '3 Years',
    },
    {
      value: '5y',
      label: '5 Years',
    },
  ];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: <NumbersOutlinedIcon />,
    },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])
      }`,
      icon: <BoltOutlinedIcon />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: 'All-time-high',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <EmojiEventsOutlinedIcon />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <TrendingUpOutlinedIcon />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlinedIcon />
      ) : (
        <DoNotDisturbOutlinedIcon />
      ),
      icon: <ErrorOutlineOutlinedIcon />,
    },
    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ErrorOutlineOutlinedIcon />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ErrorOutlineOutlinedIcon />,
    },
  ];

  // if (isFetching) {
  //   return 'Loading...';
  // }
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl font-bold text-blue-500">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </div>
        <div className="text-lg my-6">
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </div>
      </div>
      <select
        // onChange={(e) => setTimePeriod(e.target.value)}
        defaultValue="7d"
        className="border border-black w-28 py-1 px-2 rounded-md mx-auto block md:mx-0"
      >
        {time.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <StatsTable
          name={`${cryptoDetails?.name} Value Statistics`}
          desc={`An overview showing the stats of ${cryptoDetails?.name}`}
          items={stats}
        />
        <StatsTable
          name="Other Stats Info"
          desc={`An overview showing the statistics of ${cryptoDetails?.name}, such as
          the base and quote currency, the rank, and trading volume.`}
          items={genericStats}
        />
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="px-4">
          <div className="text-2xl font-bold text-blue-500 mt-12">
            What is {cryptoDetails?.name}?
          </div>
          <div>{HTMLReactParser(cryptoDetails?.description || '')}</div>
        </div>

        <div className="mt-12 xl:mt-0 flex flex-col items-center max-w-lg min-w-[300px] mx-auto xl:ml-12 lg:min-w-[480px]">
          <div className="text-2xl font-bold text-blue-500 mt-12">
            {cryptoDetails?.name} Links
          </div>
          <div className="flex flex-col items-center mx-auto w-full">
            {cryptoDetails?.links?.map((link) => (
              <Link
                to={link.url}
                target="_blank"
                key={link.url}
                className="hover:bg-blue-800 hover:text-white p-6 w-full border-b border-b-black justify-between flex items-center"
              >
                <div className="font-medium capitalize">{link.type}</div>
                <div className="font-medium text-blue-500">{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsTable = ({ name, desc, items }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center mt-12 max-w-lg mx-auto lg:mx-6">
      <div className="text-2xl font-medium">{name}</div>
      <div className="text-lg my-2">{desc}</div>
      <div className="flex flex-col">
        {items.map(({ icon, title, value }) => {
          return (
            <div
              key={title}
              className="w-72 p-6 border-b border-b-black justify-between flex items-center"
            >
              <div className="flex items-center">
                <div className="mr-2">{icon}</div>
                <div>{title}</div>
              </div>
              <div className="font-bold">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoDetail;
