// 图片上传提交
//这里主要使用FormData来拼装好数据参数，提交到后台
var formFile = new FormData();

//遍历imgFile图片流数组拼装到FormData中
 $.each(imgFile, function(i, file){
            formFile.append('myFile[]', file);
        });
        
//添加其他参数
    formFile.append("type", type); 
        formFile.append("content", content); 
        formFile.append("mobile", mobile); 
        
 $.ajax({
            url: 'http://zhangykwww.yind123.com/webapi/feedback',
            type: 'POST',
            data: formFile,
            async: true,  
            cache: false,  
            contentType: false, 
            processData: false, 
            // traditional:true,
            dataType:'json',
            success: function(res) {
                console.log(res);
            }
        })
