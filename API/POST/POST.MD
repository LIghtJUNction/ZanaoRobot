> base_url="http://api.zanao.com"

# /thread/post

功能:发帖

```
{
"is_comment_close": "0",
"contact_phone": "",
"contact_person": "",
"img_paths": "",
"contact_wx": "",
"contact_qq": "",
"cate_id": "108",
"title": "标题",
"content": "内容",
"cert_show": "10"
}
```

```
{
"errno": 0,
"errmsg": "",
"data": {
"thread_id": 1889847064,
"post_price": 0,
"top_forbid": false
}
}
```

# /comment/post

发评论

```
{
"reply_comment_id": "0",
"pu": "",
"from": "detail",
"id": "1889847064",
"root_comment_id": "0",
"content": "内容",
"cert_show": "0"
}
```

```
{
"errno": 0,
"errmsg": "",
"data": {
"t_sign": "NlZta043eGQrYVl1cjhoTnhRazhNd1FqbUU1eCtac2NCTG9vREFucFZ1eUVYeGx4TDJ1YUVKWi9QbmtjdGltbG9YUjMzOGJRUy95UTdsQTFjNjRmM2JNVWpid1JSQXBNdk02TUxLa1RWYTQ9",
"comment_id": 1889862588
}
}
```

> t_sign即为 /comment/list 的参数 sign 请见GET.MD

# /rqd/async

```
{
"aid": "29134465-371b-41ee-8541-db882f720ee4"
}
```

# /app/devicereg

```
{
"device_id": "00000000-4d2c-8093-ffff-ffffef05aca-07e09d98dc53262f",
"app_info": "{\"os\":\"Android\",\"hbVersion\":127,\"name\":\"校园集市\",\"appVersionName\":\"1.3.5\",\"appVersionCode\":135,\"brand\":\"XiaoMi\",\"regId\":\"XiaoMi_IN_f10d93e629cc96b2ae690578d819e281\",\"regType\":\"oppopush\",\"deviceId\":\"00000000-2b1c-8093-ffff-ffffef05ac4a-07e09d98dc53262f\",\"systemVersion\":\"34\",\"cacheSize\":\"728.45KB\"}",
"ua": "Mozilla/5.0 (Linux; Android 14; CPH2487 Build/UKQ1.231108.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/129.0.6668.102 Mobile Safari/537.36 __HB__NightMode-3",
"reg_id": "OnePlus_IN_f10d93e629cc82b2ae690578d819e281"
}
```

> {
> "errno": 0,
> "errmsg": "",
> "data": {
> "account_login": true,
> "wx_login": true
> }
> }

# /app/checkupgrade

app端检查更新

```
{
"errno": 0,
"errmsg": "",
"data": {
"nt_need_upgrade": false,
"nt_version_info": [],
"hb_need_upgrade": false,
"hb_version_info": []
}
}
```

# /app/cheackuser

> 响应头：

```
{
"Date": "Mon, 28 Oct 2024 10:06:56 GMT",
"Content-Type": "text/html; charset=UTF-8",
"Transfer-Encoding": "chunked",
"Connection": "keep-alive",
"Vary": "Accept-Encoding",
"X-Sc-Encrypt": "1",
"Content-Encoding": "gzip"
}
```

> "X-Sc-Encrypt": "1" 表示启用加密

```
ylLoig4VpM39mT01Cy1WXHNfOlmxbp4NnGNv8vQHUMTPgSdWPEMAc3n/em11vezK8RwRoV0Jp1RP+PMkMFqI/GW0AN5l8e+0I2P4zCdZVnj6yTueFC0IkHsChDqpPtWoMUiNu0kHJ4HS9cOOvPAuM0Zd/tHeVILU3PbYqbq+L98xf9oXV66iMbkcEZJJ4XXmCSvTwaeKpa8sFdV5uqknCPY+tjDyIBvmttmgbP5Vc39VQeJnNxdhYzGpp2EXHyDIu/c3hPgnajMtDRPLyq9f2RYWCK/5Y9+hdVNeD2CWRsxuQQ3GuqnLLaDCsOFCaDiST1GHoraMmmofl5frL6AZfbFLfy5rImBRyxcLqlRsLFu/2OePumRXTl7rOszciiqG6YF3nIVwpy+oftk4a63NJvnKqAcYu7RcVQH/u+WdAsUHbQLFDdg9d9ySRJMiefyVuZkre+ZBkzISTqs3YwE7RjUqtCu5sp3M2xdXai5ic/jolwPkZCSyyoIEZyyFU3uhG3Z4NHrPXXA+or0H+IWisheQ1e3ffE0Qn2NvsDkIbON8yzJjxxFU7JGPPryMkHUgiC+vgf7zH5Q3gKuT4d8ffyFzYqLY3CcvVmhnhm1mhPrllcKklWR9IYrPIags6gKidPsOuzdsp1bslDgHLIYPPRidiN0kZc2DlZ749+wxebW3FVnrQbUN+ee+ia949uPmY4Fr4prXChkuvkBp59Zelizo6igk9GxKd+NkLsZZmMNhMyBb80pgm9X9Tp9PpNfAmkLIAqu+NmPX917RIt+kjaUcM7tD+4WeNSqHQtgmayDw7GoyhAm3OAkTLafbB8592N+rlNtLZO3zx3MUVBfKpeuLbl75eNpKAHqh3/hMrWcqTTZd0cORTFbaxzm4UaOPlLhIYcYLdPWZ6gnYQh8Kuw0mk7fQHfW07oJ9mUw6MT/7NKWCADH8F1EOZ0ATasxfHOFUD+rp6JFuzn7UpHxX8xOcGkWViScwB/+YFv8itZgAYIO++VOmmy86pL60jOD
```
