var dropdown={
    init:function(){
        this.dropdownItemClick();
        this.itemNumInit();
        this.childCheck();
    },
    /*父节点数量统计初始化*/
    itemNumInit:function(){
        $(".totalNum").each(function(){
            var $item=$(this).parents(".dropdownItem").next("ul").children("li"),
            $checkedItem=$(this).parents(".dropdownItem").next("ul").children("li:checked");
           var  $this=$(this);
           $this.text($item.length);
           $this.prev().text($checkedItem.length);
        });
    },
    dropdownItemClick:function(){
        $("body").on('click','.dropdownItem',function(){
            var $this=$(this);
            var isFold=$this.find("dn").hasClass("glyphicon-plus-sign");
            $this.find(".dn").removeClass("dn").siblings(".glyphicon").addClass("dn");
            $this.next().toggle();
        });
    },
    childCheck:function(){
        $(".dropdown").on('change','input[type="checkbox"]',function(){
            var $this=$(this);
            var parentUl=$this.parents("ul");
            var checkedLen=parentUl.find("input[type='checkbox']:checked").length;
            parentUl.prev().find(".checkedNum").text(checkedLen);
        });
    }
};
$(function(){
    dropdown.init();
});
