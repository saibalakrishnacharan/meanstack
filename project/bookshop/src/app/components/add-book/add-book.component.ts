
import { Component, NgZone, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { CrudService } from 'src/app/service/crud.service';



@Component({

  selector: 'app-add-book',

  templateUrl: './add-book.component.html',

  styleUrls: ['./add-book.component.css']

})

export class AddBookComponent implements OnInit {

  bookform:FormGroup;

  constructor(private formBuilder:FormBuilder,

    private router:Router,

    private ngZone:NgZone,

    private crudService:CrudService) {

      this.bookform=this.formBuilder.group({

        name:[''],

        price:[''],

        description:['']

      })

     }



  ngOnInit(): void {



  }

    onSubmit():any{

      this.crudService.AddBook(this.bookform.value).subscribe((res:any)=>{

      console.log('Data Added Successfully');

      this.ngZone.run(()=>

        this.router.navigateByUrl('/books-list'))

      },(err)=>{

        console.log(err);

      });

    }

    }
/*import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookform:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private crudService:CrudService) { 
      this.bookform = this.formBuilder.group({
        name:[''],
        price:[''],
        description:['']
      })
    }

  ngOnInit() {}
    onSubmit():any {
      this.crudService.AddBook(this.bookform.value)
      .subscribe(()=>{
        console.log('Data Added Successfully')
        this.ngZone.run(()=> this.router.navigateByUrl('/books-list'))
        }, (err)=>{
        console.log(err)
        });
      }
  }

*/