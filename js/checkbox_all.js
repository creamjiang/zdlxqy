function CheckAll()
{
for (var i=0;i<document.smslist.ckbox.length;i++)
{
var e = document.smslist.ckbox[i];
if (e.name != 'allbox')
e.checked = document.smslist.allbox.checked
}
}