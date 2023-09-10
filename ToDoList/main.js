document.getElementById('button-add').addEventListener('click', function() {
   const inputvalue = document.getElementById('input').value;
   const tableContainer = document.getElementById('table-container');
   const tr = document.createElement('tr');
   tr.innerHTML = `
        <tr>
         <td style="text-align: left;">${inputvalue}</td>
            <td style="text-align: right;">
                <button class="btn  me-2 px-lg-4 delete-btn">✔</button> 
            </td>
        </tr>
    `;
   tableContainer.appendChild(tr);
   document.getElementById('input').value = '';

   const elements = document.querySelectorAll('.delete-btn');

   for(const element of elements){
      element.addEventListener('click', function(e){
         e.target.parentNode.parentNode.remove();
      })
   }
});

document.getElementById('button-clear').addEventListener('click', function() {
   const tableContainer = document.getElementById('table-container');
   tableContainer.innerHTML = '';
});
