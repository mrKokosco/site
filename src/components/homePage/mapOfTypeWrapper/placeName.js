 import irkutRiver from '../../../images/irkurRiver.png'
 import vulkan from '../../../images/vulkan.png'
 import shumak from '../../../images/shumak.png'
 import severobalik from '../../../images/severobalik.png'
 import floriha from '../../../images/floriha.png'
 import kotyalkovskey from '../../../images/kotyalkovskey.png'
 import arshan from '../../../images/arshan.png'
 import jemchug from '../../../images/jemchug.png'

 const color ={
    yellow:'#EBD5CC',
    pink:'#ECA3C3',
   blue:'#C4D7E2'
}
 


export const placeName=[
    {id:1,
        title:'Малое море',
        textPreview:`это участок озера Байкал, отделенный от Большой Воды островом Ольхон. 
        Находится море на западном побережье Байкала, в Иркутской Области. 
        Частью этого места считается пролив «Ольхонские Ворота», который отделяет Малое Море от основного озера. 
        Через пролив курсируют паромы до о. Ольхон, кстати, совершенно бесплатные. `,
        color: color.blue,
        img:'' ,
        rowStart:6,
        rowEnd:7,
        colStart:22,        
        colEnd: 23,
        placement:'left'
    },
    {id:2,
        title:'Тальцы ',
        textPreview:`Если ехать из Иркутска в сторону п. Листвянка, первое место, 
        в которые обязательно нужно заехать – этнографический музей под открытым небом «Тальцы».
         Здесь собраны памятники деревянного зодчества Прибайкалья`,
        color: color.pink,
        img:'',
        rowStart:10,
        rowEnd:11,
        colStart:15,        
        colEnd: 16    
    },
    {id:3,
        title:'П. Листвянка  ',
        textPreview:`Поселок Листвянка находится всего в 70 км. от Иркутска.  И считается самым посещаемым местом на Байкале. 
        Своим названием он обязан лиственницам, которые обильно растут на прилегающем к нему мысу`,
        color: color.pink,
        img:'',
        rowStart:11,
        rowEnd:12,
        colStart:16,        
        colEnd: 17    
    },
    {id:4,
        title:'Железная дорога',
        textPreview:`Для своего времени эта дорога была чудом инженерной мысли. Не говоря о том, что это была самая дорогая дорога в России, КБЖД прорыта прямо в скалах. Она состоит из 39 туннелей, 248 мостов и 15 каменных галерей. 
        Дорога связывает между собой разорванную Байкальскую Транссибирскую магистраль`,
        color: color.yellow,
        img:'',
        rowStart:11,
        rowEnd:12,
        colStart:13,        
        colEnd: 14    
    },
    {id:5,
        title:'Большое Голоустное',
        textPreview:`Поселок расположенный на западном берегу Байкала, основанный почти 3 века назад. 
        Поселок, в котором живет около 600 человек, при чем половина из них русские, а половина – буряты`,
        color: color.pink,
        img:'',
        rowStart:10,
        rowEnd:11,
        colStart:17,        
        colEnd: 18    
    },
    {id:6,
        title:'Бухта Песчаная ',
        textPreview:`Из названия можно сделать вывод, что бухта славиться своими песчаными пляжами. Это так, но не только этим она прекрасна. 
        Эта лазурная вода, она настолько притягательна, что хочется, не раздумывая зайти и окунуться`,
        color: color.pink,
        img:'',
        rowStart:9,
        rowEnd:10,
        colStart:14,        
        colEnd: 15    
    }
    ,
    {id:7,
        title:'О. Ольхон',
        textPreview:`Самый большой остров на Байкале. Священное место. 
        Магический остров, по праву именуемый Сердцем Байкала. Кроме того, он единственный из островов, обжитый людьми. `,
        color: color.blue,
        img:'',
        rowStart:7,
        rowEnd:8,
        colStart:22,        
        colEnd: 23,
        placement:'left'    
    },
    ,
    {id:8,
        title:'Улан- Удэ  ',
        textPreview:`В восточной части Байкала, а в частности в Улан- Удэ располагается множество буддийских монастырей, так называемых Дацанов. 
        Самый известный – Иволгинский дацан. Это целый комплекс, в котором расположился центр буддизма в России. `,
        color: color.pink,
        img:'',
        rowStart:10,
        rowEnd:11,
        colStart:23,        
        colEnd: 24,
        placement:'left'    
    },
    {id:9,
        title:'Полуостров Святой Нос ',
        textPreview:`Самая высокая точка полуострова – 1880метров над уровнем моря.
        Отсюда открываются прекрасные виды на Байкал, Ольхон, Ушканьи острова и многие другие окрестности. `,
        color: color.blue,
        img:'',
        rowStart:5,
        rowEnd:6,
        colStart:26,        
        colEnd: 27,
        placement:'left'   
    },
    {id:10,
        title:'Ушканьи острова',
        textPreview:`Этот небольшой архипелаг расположен в центральной части Байкала, удивителен своей флорой и фауной. 
        Главной достопримечательностью островов являются нерпы. 
        Маленькие зверьки из семейства тюленевых. Нерпы водятся, исключительно, в водах Байкала.`,
        color: color.blue,
        img:'',
        rowStart:5,
        rowEnd:6,
        colStart:25,        
        colEnd: 26,
        placement:'left'    
    },
    {id:11,
        title:'Чивыркуйский залив',
        textPreview:`В заливе очень много разнообразных бухт. 
        Например, на западном берегу залива расположилась  бухта «Змеиная»,
         в которой находятся самые горячие термальные источники на Байкале (вода здесь может быть от 38 до 45°С)`,
        color: color.blue,
        img:'',
        rowStart:6,
        rowEnd:7,
        colStart:24,        
        colEnd: 25,
        placement:'left'    
    },
    {id:12,
        title:'Баргузинская долина ',
        textPreview:`Это место будет по душе путешественникам, любящим походы. 
        Здесь почти нет дорог, зато есть настоящая тайга и высокогорная тундра. 
        В долине находится порядка 10 минеральных озер, которые по своим лечебным свойствам замыкают тройку лучших источников Бурятии. `,
        color: color.pink,
        img:'',
        rowStart:6,
        rowEnd:7,
        colStart:27,        
        colEnd: 28,
        placement:'left'   
    },
    {id:13,
        title:'Посольский сор  ',
        textPreview:`Это мелководный залив на восточном берегу Байкала.
        Посольский залив один из самых популярных мест летнего отдыха на Байкале.  
        Пляжи здесь песчаные, а воды достаточно мелкие, поэтому хорошо прогреваются.  `,
        color: color.blue,
        img:'',
        rowStart:11,
        rowEnd:12,
        colStart:19,        
        colEnd: 20,
        placement:'left'   
    },
    {id:14,
        title:'Горячинск ',
        textPreview:`В поселке Горячинск расположен один из знаменитейших лечебных курортов России. 
        Эвенки из тысячелетия в тысячелетие приходили сюда лечить свои раны и болезни. Здешние воды идеальны по своему хим. составу: они азотно- кремистые, слабо минерализованные и содержат сульфат натрия. 
        Особенно помогают при болезнях дыхательных и пищеварительных органов, нервной системы и гинекологических заболевания`,
        color: color.yellow,
        img:'',
        rowStart:7,
        rowEnd:8,
        colStart:25,        
        colEnd: 26,
        placement:'left'    
    },
    {id:15,
        title:'Байкальск ',
        textPreview:`Юго- Восточное побережье Байкала. 
        Считается, что это не самое лучшее место для пляжного отдыха или рыбалки. И в этот момент в игру вступает Байкальск и его окрестности. Летом здесь можно отправиться в поход в горы. 
        В окрестностях расположились очень интересные озера: Теплые, Сказка, Мертвое. Поверьте, они стоят того, чтобы добраться до них. `,
        color: color.yellow,
        img:'',
        rowStart:12,
        rowEnd:13,
        colStart:14,        
        colEnd: 15    
    },
    {id:16,
        title:'Слюдянка ',
        textPreview:`Причин приехать сюда достаточно. 
        Во-первых: город находится на Транссибирской магистрали. 
        Во-вторых: недалеко на запад расположен известнейший Хамар- Дабан, манящий любителей горного туризма и экотуризма. 
        В-третьих: в окрестностях Слюдянки расположилось множество живописных озер. `,
        color: color.yellow,
        img:'',
        rowStart:11,
        rowEnd:12,
        colStart:12,        
        colEnd: 13    
    },
    {id:17,
        title:'Река Иркут ',
        textPreview:`Иркут является одной из популярнейших рек для проведения спортивных сплавов, 
        да и неспортивных путешествий тоже, так как на всем протяжении река имеет различного характера сплавные участки.`,
        color: color.blue,
        img: irkutRiver,
        rowStart:11,
        rowEnd:12,
        colStart:8,        
        colEnd: 9    
    },
    {id:18,
        title:'Долина вулканов  ',
        textPreview:`Долина потухших вулканов находится в Окинском районе Республики Бурятии, в 500км от Иркутска. 
        Некогда действующие: Вулкан Кропоткин, Старый и Перетолчин спят здесь, уже, очень много лет. `,
        color: color.pink,
        img: vulkan,
        rowStart:8,
        rowEnd:9,
        colStart:3,        
        colEnd: 4 ,
        placement:'right'   
    },
    {id:19,
        title:'Шумак ',
        textPreview:`Долина реки Шумак, находящаяся за одноимённым перевалом сокрыла в себе знаменитые Шумакские источники. 
        Здесь находится более 100 минеральных радоновых, термальных и углекислых источников, знаменитых своей чудодейственной силой.  `,
        color: color.pink,
        img: shumak,
        rowStart:11,
        rowEnd:12,
        colStart:3,        
        colEnd: 4 ,
        placement:'right'   
    },
    {id:20,
        title:'Северобайкальск  ',
        textPreview:`Центр северного Байкала. Северобайкальск, окруженный с трех сторон стеной из заснеженных гор, открыл южную свою сторону для того, чтобы впустить к себе Байкал.
         Изначально это был небольшой поселок строителей. Байкало-Амурская магистраль стала градообразующей силой города `,
        color: color.pink,
        img: severobalik,
        rowStart:1,
        rowEnd:2,
        colStart:26,        
        colEnd: 27 ,
        placement:'bottomRight'   
    },
    {id:21,
        title:'Фролиха  ',
        textPreview:`Озеро Фролиха – жемчужина северного побережья Байкала. 
        Это сказочно-красивое ледниковое озеро, расположившееся в высоких горах Баргузинского хребта, в 8 км. от губы Аяя`,
        color: color.pink,
        img: floriha,
        rowStart:1,
        rowEnd:2,
        colStart:28,        
        colEnd: 29 ,
        placement:'bottomRight'   
    },
    {id:22,
        title:'Мыс Котельниковский ',
        textPreview:`В народе его ласково называют «Котелки», а название его пошло от фактории купца Котельникова, 
        которая находилась здесь ранее. На мысе находится самый горячий на Байкале минеральный источник. `,
        color: color.pink,
        img: kotyalkovskey,
        rowStart:2,
        rowEnd:3,
        colStart:26,        
        colEnd: 27 ,
        placement:'bottomRight'   
    },
    {id:23,
        title:'Аршан',
        textPreview:`Знаменитый курорт Тункинской долины, расположенный у подножия Саянских гольцов, в 210 км. от Иркутска. 
        В переводе с бурятского означает «Целебная вода».  
        Курорт Аршан расположен возле поселка с одноименным названием. Здесь на поверхность выходят минеральные воды. `,
        color: color.blue,
        img:arshan,
        rowStart:7,
        rowEnd:8,
        colStart:24,        
        colEnd: 25,
        placement:'left'    
    },
    {id:24,
        title:'Жемчуг ',
        textPreview:`Жемчуг укрыл в себе одноименный минеральный источник. Открыт источник был достаточно интересным стечением обстоятельств. 
        В 50-е годы прошлого столетия в Тункинской долине искали нефть `,
        color: color.blue,
        img:jemchug,
        rowStart:11,
        rowEnd:12,
        colStart:4,        
        colEnd: 5,
        placement:'top'    
    },
    
    


]