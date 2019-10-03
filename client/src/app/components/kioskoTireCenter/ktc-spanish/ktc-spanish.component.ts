import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { KioskoTireCenterService } from '../../../services/kiosko-tire-center.service';
import { modelParamBatery } from '../../../models/modelParamBatery';
import { battery, modelAudit } from '../../../models/modelParamBatery';
import { modeladvertising } from '../../../models/modelAdvertising';
import { timer, empty } from 'rxjs';
import { Dropdown } from "primeng/components/dropdown/dropdown";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-ktc-spanish',
  templateUrl: './ktc-spanish.component.html',
  styleUrls: ['./ktc-spanish.component.css']
})



export class KtcSpanishComponent implements OnInit {

  @ViewChild('ddMarca', { static: false }) ddMarca: Dropdown;
  @ViewChild('ddModelo', { static: false }) ddModelo: Dropdown;

  cars: any = [];
  model: any = [];
  batery: any = [];
  publicidad = true;
  itemsPublicidad: any = [];

  //Carousel

  myAdvertising: any = [];


  mySlideOptions = {
    items: 1,
    nav: false,
    loop: true,
    dots: false,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayTimeout: 200000,
    autoplayHoverPause: true
  }

  //Timer
  timeLeft: number = 80;
  interval;
  subscribeTimer: any;

  // Model for get Batetery
  bateryValue: modelParamBatery = {
    idMarca: 0,
    idModelo: 0
  }

  //Model for modal Baterry
  Mbattery: battery = {
    Opcion: '',
    Bateria: 0,
    Numero: '',
    Descripcion: '',
    Marca: ''
  }

  //Model for modal advertising
  Madvertising: modeladvertising = {

    id_item_publicidad: 0,
    descripcion_corta: '',
    detalle: '',
    tipo: '',
    marca: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    c9: '',
    c10: ''
  }

  //Model for insert audit
  audit: modelAudit = {

    marca_vehiculo: 0,
    modelo_vehiculo: 0,
    numero_bateria: '',
    codigo_bateria: ''
  }

  constructor(private kioskoservice: KioskoTireCenterService, private modalService: NgbModal) {

    this.getBrands();
    this.getItemPublicidad();

  }

  ngOnInit() {
  }

  getBrands() {

    this.kioskoservice.getBrands().subscribe(
      res => {

        this.cars = res;

      },
      err => console.error(err)
    )

  }


  getModels(value) {


    this.kioskoservice.getModel(value).subscribe(
      res => {

        this.model = res;

      },
      err => console.error(err)
    )

  }

  getBatery() {

    if (this.bateryValue.idMarca == 0) {
      window.alert('Seleccione la marca de su vehiculo')
    } else if (this.bateryValue.idModelo == 0) {
      window.alert('Seleccione el modelo de su vehiculo')
    }
    this.pauseTimer();
    this.timeLeft = 80;
    this.startTimer();

    this.kioskoservice.getBatery(this.bateryValue).subscribe(
      res => {
        this.batery = res;
        this.publicidad = false;

        this.audit.marca_vehiculo = this.bateryValue.idMarca;
        this.audit.modelo_vehiculo = this.bateryValue.idModelo;

        this.putAudit(this.audit);

      },
      err => console.error(err)
    )

  }

  // Timer
  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;

    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

      } else {
        this.timeLeft = 80;
        this.pauseTimer();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.clearFilter(this.ddMarca);
    this.clearFilter(this.ddModelo);
    this.closeModal('productsModal');
    this.closeModal('productsModaladvertising');
    this.publicidad = true;
  }


  clearFilter(dropdown: Dropdown) {
    dropdown.resetFilter();

  }

  //Modal Battery
  showModal(producto: any, modal) {

    this.Mbattery.Opcion = producto.Opcion;
    this.Mbattery.Descripcion = producto.Descripcion;
    this.Mbattery.Marca = producto.Marca;
    this.Mbattery.Numero = producto.Numero;

    this.modalService.open(modal);

  }

  //Modal advertising
  showModalAdvertising(producto: any, modal) {
    this.pauseTimer();
    this.timeLeft = 80;
    this.startTimer();




    this.Madvertising.id_item_publicidad = producto.id_item_publicidad;
    this.Madvertising.descripcion_corta = producto.descripcion_corta;
    this.Madvertising.detalle = producto.detalle;
    this.Madvertising.tipo = producto.tipo;
    this.Madvertising.marca = producto.marca;

    this.Madvertising.c1 = producto.c1;
    this.Madvertising.c2 = producto.c2;
    this.Madvertising.c3 = producto.c3;
    this.Madvertising.c4 = producto.c4;
    this.Madvertising.c5 = producto.c6;
    this.Madvertising.c7 = producto.c7;
    this.Madvertising.c8 = producto.c8;
    this.Madvertising.c9 = producto.c9;
    this.Madvertising.c10 = producto.c10;


    this.modalService.open(modal);

  }

  closeModal(modal) {
    this.modalService.dismissAll(modal);
  }

  //Audit
  putAudit(audit: modelAudit) {
    this.kioskoservice.putAudit(audit).subscribe(
      res => {

      }, err => console.error(err)
    )
  }

  //Get Items Publicidad
  getItemPublicidad() {
    this.kioskoservice.getItemPublicidad().subscribe(
      res => {

        this.itemsPublicidad = res;

        console.log(this.itemsPublicidad);


        this.myAdvertising = this.itemsPublicidad.map((i) => `assets/Publicidad/${i.id_item_publicidad}`);


      }, err => console.error(err)
    )
  }



}
