package com.mengfei.fbsepjava.controller;

import com.mengfei.fbsepjava.annotation.UserTokenCheck;
import com.mengfei.fbsepjava.dto.UserRequestDTO;
import com.mengfei.fbsepjava.pojo.ApiResponse;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

    //测试JSON响应结构
    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public ApiResponse<String> helloWorld(){
        return new ApiResponse<String>(9999,"OK","Hello World");
    }

    //测试全局的异常处理
    @RequestMapping(value = "/exception",method = RequestMethod.GET)
    public ApiResponse testExceptionHandle(){
        int i = 10/0;

        return new ApiResponse<String>(9999,"OK",null);
    }

    //测试hibernate-validator验证
    @RequestMapping(value = "/addUser",method = RequestMethod.POST)
    public ApiResponse addUser(@RequestBody @Valid UserRequestDTO requestDTO){
        System.out.println(requestDTO);

        return new ApiResponse<>(9999,"添加用户成功",requestDTO);
    }

    //测试Token验证功能
    @UserTokenCheck //在需要验证token的方法上添加此注解
    @RequestMapping(value = "/token",method = RequestMethod.GET)
    public ApiResponse<String> checkToken(){
        return new ApiResponse<String>(9999,"OK",null);
    }
}
