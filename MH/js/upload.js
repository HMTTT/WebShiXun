/**
 * 
 */

function imgInit() {
	img = '';
	img += '<div class="editListPop pop-tip" data-drag="false"><div class="pop-tip-top"><div>'+lname+'>>编辑歌单</div></div>';
	img += '<div><div><p style="margin: 5px 15px 0 15px;">歌单名： <input type="text" class="crt-txt edit-txt" value="'+lname+'"/></p>';
	img += '<div class="errtip" style="position: relative;right: -170px;"><i class="errico"></i>歌单名不能为空</div></div><div class="cover-cg">';
	img += '<img id="cover-img" src="../mpsrc/img/' + photo + '" /><span class="cover-down"></span>';
	img += '<a class="cover-upload" onclick="changeCover()">编辑封面</a>';
	img += '<input type="file" onchange="upld()" accept=".png,.jpg,.gif,.jpeg" id="upload-cover" name="upload-cover" style="display: none;"></div>';
	img += '<div class="editbtn crt-tip-func"><a class="del-tip-icn dti-crt" onclick="saveImg(this)" data-lid=' + lid + '> <i>保存</i>';
	img += '</a> <a class="del-tip-icn dti-can" href="javascript:closeTip()"> <i>取消</i></a></div></div>';
	img += '<span class="tip-cls" title="关闭窗口"></span></div>';
	img += '<div id="fix-screen"></div>';
	return img;
}