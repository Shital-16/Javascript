var emp_id = prompt("Enter the Employee Id ");
var emp_name = prompt("Enter the Employee Name ");
var basic_salary = parseInt(prompt("Enter the Basic Salary"));

if(basic_salary >=50000)
{
    hra =   basic_salary*35/100;
    da  =   basic_salary*30/100;
    ta  =   basic_salary*25/100;
    tax =   basic_salary*20/100;
    pf  =   basic_salary*24/100;
}
else if(basic_salary >=40000)
{
    hra =   basic_salary*30/100;
    da  =   basic_salary*25/100;
    ta  =   basic_salary*20/100;
    tax =   basic_salary*18/100;
    pf  =   basic_salary*22/100;
}
else if(basic_salary >= 30000)
{
    hra =   basic_salary*27/100;
    da  =   basic_salary*22/100;
    ta  =   basic_salary*17/100;
    tax =   basic_salary*15/100;
    pf  =   basic_salary*18/100;
}
else if(basic_salary >=20000)
{
    hra =   basic_salary*20/100;
    da  =   basic_salary*18/100;
    ta  =   basic_salary*15/100;
    tax =   basic_salary*17/100;
    pf  =   basic_salary*20/100;
}
else if(basic_salary>=10000)
{
    hra =   basic_salary*12/100;
    da  =   basic_salary*10/100;
    ta  =   basic_salary*11/100;
    tax =   basic_salary*12/100;
    pf  =   basic_salary*10/100;
}
else
{
    document.write("You are not eligible for allowance.");
}

net_salary      = basic_salary + hra + da + ta;
gross_salary    = net_salary - (tax+pf);

document.write("Employee Id : <b>"+ emp_id +"</b><br>" );
document.write("Employee Name : <b>"+ emp_name +"</b><br>");
document.write("Basic Salry : <b>"+basic_salary+"</b><br>");
document.write("HRA : <b>" + hra +"</b><br>");
document.write("DA : <b>" + da +"</b><br>");
document.write("TA : <b>" + ta +"</b><br>");
document.write("TAX : <b>" + tax +"</b><br>");
document.write("PF : <b>" + pf +"</b><br>");

document.write("Net Salary : <b>" + net_salary +"</b><br>");
document.write("Gross Salary : <b>" + gross_salary +"</b><br>");

if(net_salary>=50000)
    document.write("Chief Executive");
else if(net_salary>=35000)
    document.write("Manager");
else if(net_salary>=20000)
    document.write("Assistant");
else
    document.write("Staff");
    