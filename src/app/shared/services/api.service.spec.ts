import { HttpClient } from '@angular/common/http';
import { async, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService, httpOptions } from './api.service';


describe('ApiService', () => {
  let apiService: ApiService;
  let http: HttpClient;
  let response: any;

  const apiPath = ``;
  const urlPath = `data`;
  const url = `${apiPath}/${urlPath}`;
  const fakeData = { name: 'Test Data' };
  const mockHeaders = httpOptions;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    apiService = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
    response = { a: fakeData };
  }));

  describe('#get', () => {
    it('calls HttpClient#get', () => {
      const noOptions = {};
      const httpGetSpy = spyOn(http, 'get').and.returnValue(response);
      apiService.get(apiPath, urlPath, noOptions).subscribe();
      expect(httpGetSpy).toHaveBeenCalledWith(url, noOptions);
    });
  });

  describe('#put', () => {
    it('calls HttpClient#put', () => {
      const htttPutSpy = spyOn(http, 'put').and.returnValue(response);
      apiService.put(apiPath, urlPath, fakeData).subscribe();
      expect(htttPutSpy).toHaveBeenCalledWith(url, fakeData, mockHeaders);
    });
  });

  describe('#post', () => {
    it('calls HttpClient#post', () => {
      const htttPostSpy = spyOn(http, 'post').and.returnValue(response);
      apiService.post(apiPath, urlPath, fakeData).subscribe();
      expect(htttPostSpy).toHaveBeenCalledWith(url, fakeData, mockHeaders);
    });
  });

  describe('#delete', () => {
    it('calls HttpClient#delete', () => {
      const htttDeleteSpy = spyOn(http, 'delete').and.returnValue(response);
      apiService.delete(apiPath, urlPath).subscribe();
      expect(htttDeleteSpy).toHaveBeenCalledWith(url, mockHeaders);
    });
  });
});
