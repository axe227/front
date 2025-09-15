import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { VignetteService } from './vignette.service';

describe('VignetteService', () => {
  let service: VignetteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VignetteService,
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(VignetteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'aucune requête HTTP n'est restée en attente
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call searchByImmatriculation and return data', () => {
    const dummyData = { plaque: '123ABC', status: 'active' };

    service.searchByImmatriculation('123ABC').subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/vignettes/123ABC'); // Vérifie l'URL
    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Simule la réponse
  });
});