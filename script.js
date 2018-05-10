$(document).ready(function () {
    $(".spoiler_body").slideToggle();
    $($(".spoiler_body").get(0)).slideToggle();
    $(".spoiler_head").click(function () {
        $(this).next().slideToggle();
    });

    $("select, :radio").click(function () {
        // 对每个区域内的投票内容进行检查
        // 确保每个区域内 value为7/6/5的input标签不超过一个，
        // 3 4的不超过2个，1 2的不超过3个
        //拿到当前歌曲/玩家的列表（Grand Award）
        var list = $(this).parent().parent();
        //获取直接子菜单（一个li数组）
        var listItems = list.children();
        var count7 = 0;
        var count6 = 0;
        var count5 = 0;
        var count4 = 0;
        var count3 = 0;
        var count2 = 0;
        var count1 = 0;
        var currentInput = null;
        listItems.each(function (i, listItem) {
            //单个li下被选中的input
            var input = $(listItem).children(":checked");
            $(input).each(function () {
                //该区域内当前被选中的input框
                currentInput = this;
                switch (this.value) {
                    case "7":
                        count7++;
                        break;
                    case "6":
                        count6++;
                        break;
                    case "5":
                        count5++;
                        break;
                    case "4":
                        count4++;
                        break;
                    case "3":
                        count3++;
                        break;
                    case "2":
                        count2++;
                        break;
                    case "1":
                        count1++;
                        break;
                }
            });
        });

        if (count7 > 1) {
            alert("You can just vote 1 items as 7* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count6 > 1) {
            alert("You can just vote 1 items as 6* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count5 > 1) {
            alert("You can just vote 1 items as 5* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count4 > 2) {
            alert("You can just vote 2 items as 4* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count3 > 2) {
            alert("You can just vote 2 items as 3* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count2 > 3) {
            alert("You can just vote 3 items as 2* !!!");
            $(currentInput).removeAttr("checked");
        }
        if (count1 > 3) {
            alert("You can just vote 3 items as 1* !!!");
            $(currentInput).removeAttr("checked");
        }
    });

});

function get() {
    var result = "<br>[heading]MAPS[/heading]<br>";
    //获取所有大块项目
    var spoilerHead = $(".spoiler_head");

    spoilerHead.each(function (i, spoiler) {
        var id = $(this).attr("id");
        //插入id
        if (i == 6) {
            id = "[heading]GENRE-SPECFIC MAPS[/heading] <br>" +
                "[b]Rhythm Game:[/b][list] <br>";
            result += id;
        } else if (i == 12) {
            id = "[heading]USERS[/heading] <br>" +
                "[b]Grand Award:[/b][list] <br>";
            result += id;
        } else {
            result += "[b]" + id + ":[/b] [list] <br>";
        }
        //当前项目所有的歌曲
        var listItems = $(this).next().children().children();
        var string7 = "[*]7p: ";
        var string6 = "[*]6p: ";
        var string5 = "[*]5p: ";
        var string4 = "[*]4p: ";
        var string3 = "[*]3p: ";
        var string2 = "[*]2p: ";
        var string1 = "[*]1p: ";
        var currentStar = new Array(7);

        //遍历每首歌
        listItems.each(function (i, listItem) {
            //拿到这首歌的星数
            var input = $(listItem).children(":checked");

            $(input).each(function () {

                switch (this.value) {
                    //根据星数往对应的字符串加歌曲
                    case "7":
                        //粗糙的字符判断（这逻辑我自己都有点晕，懒得写i了）
                        //如果这字符串里还没有项目，就不加逗号（==0是有 ）
                        if (string7.indexOf("[*]7p: h") != 0) {
                            string7 += this.name;
                        } else {
                            string7 += ", " + this.name;
                        }
                        //标明有7星的歌
                        //说实话这个逻辑好蠢啊。。。js真的写不习惯，java早就倒过来了
                        currentStar[6] = this.value;
                        break;
                    case "6":
                        if (string6.indexOf("[*]6p: h") != 0) {
                            string6 += this.name;
                        } else {
                            string6 += ", " + this.name;
                        }
                        currentStar[5] = this.value;
                        break;
                    case "5":
                        if (string5.indexOf("[*]5p: h") != 0) {
                            string5 += this.name;
                        } else {
                            string5 += ", " + this.name;
                        }
                        currentStar[4] = this.value;
                        break;
                    case "4":
                        if (string4.indexOf("[*]4p: h") != 0) {
                            string4 += this.name;
                        } else {
                            string4 += ", " + this.name;
                        }
                        currentStar[3] = this.value;
                        break;
                    case "3":
                        if (string3.indexOf("[*]3p: h") != 0) {
                            string3 += this.name;
                        } else {
                            string3 += ", " + this.name;
                        }
                        currentStar[2] = this.value;
                        break;
                    case "2":
                        if (string2.indexOf("[*]2p: h") != 0) {
                            string2 += this.name;
                        } else {
                            string2 += ", " + this.name;
                        }
                        currentStar[1] = this.value;
                        break;
                    case "1":
                        if (string1.indexOf("[*]1p: h") != 0) {
                            string1 += this.name;
                        } else {
                            string1 += ", " + this.name;
                        }
                        currentStar[0] = this.value;
                        break;
                }
            });

        });
        for (var i = 0; i < 7; i++) {
            if (currentStar[i] != null) {
                switch (currentStar[i]) {
                    case "7":
                        result += string7;
                        break;
                    case "6":
                        result += string6;
                        break;
                    case "5":
                        result += string5;
                        break;
                    case "4":
                        result += string4;
                        break;
                    case "3":
                        result += string3;
                        break;
                    case "2":
                        result += string2;
                        break;
                    case "1":
                        result += string1;
                        break;
                }
                result += "<br>";
            }
        }
        result += "[/list] <br>";
    });


    $("#results").html(result);
    // var fields = $("select, :radio").serializeArray();
    // jQuery.each(fields, function (i, field) {
    //$("#results").append(field.name + "" + field.value + " ");
    // });
}
