/******************************

脚本功能：91视频解锁会员
下载地址：https://shrtm.nu/91sp
脚本作者：Hausd0rff
特别鸣谢：感谢@PayNe大神提供的帮助
更新时间：2022-03-08
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]
# > 91视频解锁会员
^https?:\/\/ap\w{1,4}\.(weilaixushi|orientlion|qdjdswkj|0954auto|xmblgg)\.com\/m_user\/info url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/91SPCrack.js
^https?:\/\/.*\/m_sns\/(film|video|short_video)\/(film_detail|detail_list|apply_play) url request-header (\r\n)X-AUTH-TOKEN:.+(\r\n) request-header $1X-AUTH-TOKEN: eyJhbGciOiJIUzUxMiIsImlhdCI6MTY0NTI4NDUxOSwiZXhwIjoxNjYwODM2NTE5fQ.eyJpZCI6NDg1NTM2fQ.XuVjZoS-WMwlOFWOPOOhfkJb9v7BRj5x6IUSagdbbEK96pVws6kpvEG4QK9BErNmTf1guoBXLPbU_h9vxVIQRA$2
^https?:\/\/.*\/(common\/splash_config|m_user\/(check_phone|behavior_verification_code)) url reject-200

[mitm] 
hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com, api.0954auto.com, appapi.xmblgg.com

*******************************/

var body = $response.body;
body = "7sbs9FsjMCqYvTNf/nT4bAMup8AIFQdkcvIp88bCy93MJ/qE5OC5yRmoYPuFpIvbgJtE5hI9YLHvru2bBDPKEc1tDZkQMNFTIA4F9NXg5lr0MepKVQyqqDxZG/R8v4zQsLOcZpNg61Vre9T2w7SVc8Q/CXCGdWXtFFwywTTYlNqucQxla4IQLdNWiUrvgQDgZlnJQj7B1gph7wgbHhHEy90vDJEwMXKnCXXs1SC53zw9bvd+8r0uV4YV/fP0OUbNpEmkzC6rMCddqsp2VCkRofNbYhxo0ytDdb6H25Dj6n+4ymeACZX8ghEOib9TsSwF1/oM1lw0ek0cYx/sB7qT+APiTtLp999PL88bxCZLJh4SrCfdgGInVhedQmVtKF+cd/U5GDlFbie3EJmhhO9eCvUMWZt2XUtABSB/0WTES5sl7of8p5rWQVDTJNxZIx1tXgyUHlEy6UWEiU8VqXFjGxzBADB4imy9zsJImEHAjsw6hRZGQ4X9C09RxJO+ngE0JKux3OP3hZ7bRRYU7xUJfXCp3/7hOtZrMu55BB61LzSdR91PjtlxFaOXQFf5f6QH6BjYwP5DPF2UsaFytMsdlvlcVXh/p/i9TI2W+ctRCUFkgingbd5NWPxiyb7J/A0zoV4thPp8pm9uNwrNUqOLUiz9Z31WAmNy49woksVttsK2eGqk3Ylc130i8MyOqV1YLN8jfN2WjalZITFAlwX65OTi0iwE7HWI1/oNUwrFbWLK+n54wKXusRI9L0nTYK9XFUshbPpVVJYd00NjddI6mvTdrqV+3TfEkNZC4PvI/l27xyXSSE9tY1FLOwk6tp6MpoScjMzI0DfLhi8PyB7T0rp6OvEM4ST3ic3FWdVikJC5u3zstamO/xpEAYYCQWh+fKFqIT5E2TMNWexCO5tFInqGzwMPrdUYWXxfqpOs+I6HqB6MpkumIpuoMh3J/zx/TSZZLpVZ/ARSMdCkPA/+jVpjI31BcgZSTTktfbd9B2VvSc/wxDiZmsv5EiQ71xVYC7D1b++LFWOGKGrsIrCXeCUDC3N6M6IIYFXMLUYQuJYiGPif65DpMuFp9d5cKnJ5QwGSMfTkFhnDMbhNWT3CgQPqQecs2wxEeSAM6qtLPVuzQ3fuMCZebXm+0qIoN9Y9obMYfvU6eAj+iPv/NPWnaErmkFN0OefKMSwUeJB/fU66q1qHRjTuskQ0bBhgQDWbZo6daduR+LzkihW/q6iH4ptvf9G3cZEmkv8lSkH8WEprI5H3PnL9UGFbBiFpCuCET4hRfNCbY8xBlEmXAq+6FKKL9xNe3wcYgxZhdkh+hStsxa+EPImlHGRRMBGiicb4YLKK5fzzvFLjHw53/CkKEoELbcVKRGdNeDOAID5LCx8xZmDNCSm2Wy2AVEAbFB4g0F/EW+N3io2OtkijVa0oSsQo/Y02tqUPpXwzhoB13K9Wdar/elSlU0wy1XstR2UlQAgFOmvLdJDlGSy7aFMb+R3WMYSgXxEi3nE3JnJkgUDoil2CCS//yy8HS6HZiBpx/whJcVMeStR0S3tg2qUlMZZxLtyoGMNxLfHK3fGdEhbAfC+P7kuXcJ/rzgeLPHIhN7Did14zJjNva7ZxkXWDX6IF13/ZfwiI85H4FyssIt0oiQt7T+TSztx/hEdRh+W113c6Wrs669BH+CLB2tF+EuXqpdsAHubg0ClVWNdpe4ZO8uAaLG0M1CCVS1sLKd7GGC9DQw7srr6uEJexqDP+UQEBUykq8f5EVYclGcOxbTrQUN8CzDYzZswIMbpdxwlUcVmQbMrxePe5xnkvI9j5AZp8pyfNb8VRoa6nSz12vs1W3bU+51fkpwvXGsSSyDGWTZpU1f+VH29O1ca/5hWcwkNQNtx8shzhbqbqGghSoBEkGkSWSgPoaNHmFVF7p4r7uNMiHgk43rIUGGwq6AOE16cCSCS1HJLwz6RD0DVmGodoKeFKinRTgHiHMCh3rvbLfjDSs+4C61/g9v5o6w2DsuUrpB0/tnNGO8vrJrw8X5py87EMsN0NzKTjJyY3SF0CAnofIGwSLRJIHv95qKK+9FV5SMoQR2aNUUn2iPHhYxvmUDpBDUzV36iRLcYo0w0X3lpnIcHkTfL5zLjughV9tL0G6iGVogi3WqB/tXFFlTpNMNgTJlLgtA/beTavoLuxIZ/4brsJZXA2etMzItaUm270I/WiiRlOlE6YYxeEYratSf4i7sjwhLFE10MGDtVgBKvekWAcJZHNY3ip5DrozpCAEd0Eu8DdyTrpt9fjq9gv496kg6y5lThtU72GnXxp13USCN2bAwzAqz14xhWoGLkgEppQ+HPxDRHhEyMdd8xQ24lHXTxTTLfDgITsGVqRuzv+FPRXROKqR7n9QdcltEgCRin2O/cznhe3geEK9f38pu26Xlkcxxi4bGORDxvEber4puIJkoekBscRl5sTnJ/VYhxRfTbsDXatnW7M62HbL6jU9H31LZKcq09pS8wtdXTDoWOHOwoZUfcRHpiBmuaZUKdwj03eZsoUd0zrq6Ep0FYHVmEGgOaZ47Tpa56mFZ3tlcaF+KXzlsGBcLQt9Pt6wiHgLT2uNhb7Mzg1lhDnE/ueEzLfBd1GtirMnbroa2UyfKryLUwjHY64qg0IkPfmb2+BNiEwfr0JJpytaRFP1PIhjGKj9iVQSs+Tml7vQOpnqndx5tFpWnEjj8kiwYeaC4LGodGjX2P3mwkt5SlmJftBF9PlY9OaSJXf6ecLfSqz0eEON/dRagLzChF1Uqokuc0ieCRknnBRybsmJCXnRww+42+9TEE2h8oBVqqeseHceFHJaUeR8EsfUs9BJghXOYVkRfX3m4MaaIegsDmnNeLs2IK9JifeRxodKtmQWDhltL+t7W8ZFsvnm3No3bwRZl7i3G6Ljla0Q+5l6FdoBHwb0S9p/gkuYNOo+2kMRtQnM5njHqIYrPN2G8okCtx7K91n617kX/SU44+c0h1hUQrDF6UPileO6a01ngQLFvW/aWrlJZT2UU9O8HsNxDv/7UCq7Rd2StUKvT7OrtBn4ShCmRJxlh2JdQsjPgZNjMJ2Mvo5B7Viv9caexTjf7pMMDDygtc2AN1WNPU7Gqwg84srVAP3PHN3vOcXYlozjJsQnAz+ksWR99DAA8QEBpnYUhjJEFzwiEyaECRN0HFyBritfzmLAhzGX8rca1HSre0F8N2e5sv3RM2+FiyYoQu0u5pET9bqO173UYzLAwWhwvybX86gYZtWsqkqgGjLvwANC7rKpmuIfEBULXGuAgEMwDwUvNeXnIefeb/XWZCGEbiiQk4h+4NuzSwtiepGfRJrQHJuPUaHhCvj0AmonWR2YLMLKbZDy6RjkIJUN5hbsg1ggCHVA/am+HrA2SDzkI3m0E2wECrjPRRB8z3thHYAu+UZdkMmkUA3NlnSFNvkS7dLd5wqkM4E4M9230YZB5LPbFyFbYZViQap3f/4kXcJp9hteFhITv2sq8HnYUhUUVOwQIFUvw/8P6TerJamgt2WGekCr2L1UeJcjwrqa5toDKFAl8WFdFUXPQdscKwxU8EupmjA0I8d1sI7FqYJjz9rTER3MVzEkK9Fm0udHdOiJQzp/QHL0XQ/AIXK6KR6fy8jfbhjn7lZywgrBrkU95wOT3ky1v7Jfm3TtXL6Tvdnpwr7qKxkvtlvlYJ8Ptz2j2HG5BeOWqjJ3tqXoZW2IwOhyYgPMXlXz1GIBXcAuTovrlUe4bQsI+5wDh3uLM/YbHAyX14r4uHN+qH2D1ThvZok0r69zCMmQ0VJzsrRlJXvBdvt+qFb47hVlKx4RQWi40pu+iSG9P7/B37BTcrsUJBll8DYXfdaLWwGLMP+IA3nOLSLMpyW1WHMut5s/SiHnUrtVqcROFeuww+MDhxmSLR4rggrpWBbDWd58JqCxhW/HnUgeh3Ucvigb8EyfWt5KCcQ6o6fV0MA3jNiZEwCoICDWCGCdAkeA0rC3gwdFVPzoiTE22WHa9HFJUP0uR+p2BYDd3qt1MCd5H02FDGu";
$done({
    body
});
