/*
 *
 *
脚本功能：汤头条解锁会员
软件版本：2.2.2
下载地址：https://shrtm.nu/ttsp
脚本作者：Hausd0rff
更新时间：2021.11.12
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# 汤头条解锁会员
^http:\/\/(api\w{0,1}|ttt\w{0,1})\.tbrapi\.\w{3}:\d{4}\/api\.php\/api\/user\/userinfo url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TTSPCrack.js

[mitm] 

hostname = *.tbrapi*
*
*
*/


var obj = JSON.parse($response.body);
    
    obj.data = 

"F4E540360B85E9CD70330F50955EF83FAC16D29A4E7D6784B976D643DCDBEDB6D90E8A59661354FED5A88FC4FEC599098B4CC106A377F4FD3B6C9356F0878231812A3657DAD70C639CBB50748B987694262AAB4633CF01B6BEFE6FAB1433FA2803837DA026908BFCCB7EFE67F060BD43B0E4CD9D22BB37147D1405D0C480E0A0AEFA9BD40A5A8218003804F693A35C7423187B673180F50E6A4E771D309E37C7512FA707EB1BF83B8CB0717A0C8B8FDDA72E278074E0102DD27B031AE2A160F295F018870260820CF14D0E63207D37538C8A69DB376F7637966DAB82FD74304B62A5FBF92A140D2ABC225EA622B1267CBB0F05B674AB0712C64C7AA2F576FFADBDB7595F4B43D1F7B623A07CF88755CB537269A2673C3CD8CD2202A1592435FCAEA60D71935B8B213571DCABF72A6C4E6F332AAE50BD3F0D77835AE7E8FFB32F13DF3BFAC1050B3C0786B6790C382EC57B320502DE3A2F1DCDD793B264C514800DE2C5156116A118E5D1BF4DC484507D0E0395B1AB41081E150862DC4E300BEF22C6D1F21671B9E3178688CD9EE5B66812C4EBBD281953C1C1ECACCDB73AE9E56A497CAF761A541389F76A9DD82CA71DE8A22748852B0E9AFFF2A7BC0793040513EBEEB1B761FC9022B8D8E5A7BA2F078DDB1EBAF86A54327F47F219E8EB0243FC790625909ECACF663D3B10CC0C6FD838BBF349FA621D294D1A80433825C5B23A3ADD6A7B07C63508D6E77F1CD20EAD2135EEB78DBF36312E5D3AF0C9DC479638E8A77046CA511D8F60C4F1CD4F18466DD9002967BADE9B022A4853453181E8DE9D35F1760CF74F90EBA1E5A1852A7F14A281B00CE9A14F2EB631397186FCEA92B00C8BDD0DA8072F778550EF99087A010B5A9BC78446CA4C2045772E2923615D175ED9AAEE96EC57F0E2990EDF7D320636C8BB6C853A1D33A9833BED7C3405CC0EDAE1462F57D2AE2B374BEBEDBE38A01BEC0C6C8E8FC45232F4FCC953F7E6CBC0C4581C6F5EF8A433B371899520C158C4BDD7BEFE91068F477317FAA585B704815289962F7B07249C4527BAD04652BCEA692FAD624298A06D0473C7894612A69E75C5B4504D9B3F0ED772C31A01611C77EC7CAB1A6C23F0B10E9985023241B2D7B5584A6187B5742819A025A9D71F8A587AFCBA794189C9C7CF9161BC59B2AA4A89D781B47430E00CDDBAD9743BDAAD115A8E587987DD4BFB660FA333BE8BD688F5C25878376DC64A3452D00B00C4F7B93D65673C2708D14DDBB0059AC2BCB5B1FB1C5D44E6B00DE161CF98A3A08F4F78498D28190C52BCD395128AB4C18E0ED788CC39C68F8CCB6F988B520F0EDED1AC8B24EA8BC212ADF1DFB7CE3A16047F958A8F6DA7AC4FF2C05247F448B2A9FBC06BE63E8596C4D718CD13A515176F11A602D5EAFF18FE79142706DA9A8252DEE7115DBEBAD4816510D9E3D9F7A7B76AB9EB80EFE87F0AB274A6B84B39015939A77956C52136B4BF4E00A836FE1024A03C374AA3D39F547C9A0C895EF49DDDEE892830704AC7F82DB4BF935496B01AE1F1A15F1F55F044BAD0DE460B65F6C0C0E9CE079B52E0BFC5A33D00F8287451F15EB3D9A8DAE07BBE8FD63BE59816C65277C47C0090B4906AC7E19CE290A5FDC654F202FA7A54BB8E4AD5AFDC3F4EF918A244A0AB03EF221CB6512EF837D219DC4B6962659C1FEF3FA81E319D77C98915DF7DE890FF804E669A38FC6F7D3629A555BD54C42732A2A7E2D748F46373A7BB9C3F65827C1E2034868A10FFF58D42EAB7C08E1F2E1C37D3D3A6B4B0533452C1816CB53E323C52012773C1C113816E064754A8003D1B71367EFB7E3658BA210D1F7E249C3BBB74D1294C76741166C56051324F2DFD5BCFF50A50340849230641FEDEA7C1A28D3454991FB1A62DD58E2A89397DD76EAB3042850B746225524D4EE2944C980911167AB90C3151E2CB940E39B7502459265E7858735601";

$done({
       body:JSON.stringify(obj)
});