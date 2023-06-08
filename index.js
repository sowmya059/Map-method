const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];
  
  let a=users.map((fullname)=>{
      return [fullname.first_name,fullname.last_name].join(" ")
  })
  console.log(a)