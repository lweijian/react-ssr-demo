import Koa from 'koa';
import koaBody from 'koa-body';
import koaStatic from 'koa-static';
import path from "path";
import React from 'react';
import {renderToString} from 'react-dom/server'
import App from "../containers/App";
import { StaticRouter } from "react-router-dom/server";
import {Provider, useDispatch} from "react-redux";
import {getServerStore} from "../store";
import axios from "axios";
import { modifyUserAction} from "../store/action";
import {getTemplate} from "./template";

const app = new Koa();
app.use(koaStatic(path.join(__dirname, '../public')))
// 请求体 parse 中间件，用于 parse json 格式请求体
app.use(koaBody())
app.use(async function errorHandler(ctx, next) {
    try {
        await next()
    } catch (err) {
        // 抛出的错误可以附带 status 字段，代表 http 状态码
        // 若没有提供，则默认状态码为 500，代表服务器内部错误
        console.log(err)
        ctx.status = err.status || 500
        ctx.body = {
            success: false,
            message: err.message
        }
    }
})

app.use(async (ctx) => {
    const url=ctx.request.url;
    if(url.includes('.')){
        ctx.body='';
        return false
    }
    const store=getServerStore()
    const {data}=  await axios.get('http://localhost:4000')
    store.dispatch(modifyUserAction(data.name,data.age))
    ctx.body = getTemplate(url,store)
})
app.listen(3001, () => {
    console.log('http://localhost:3001/ start')
})
