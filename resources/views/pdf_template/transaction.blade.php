<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta >
    <title>Transaction</title>
    {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}
    <style>
      body{
        padding: 0;
        margin: 0;
      }
      .section-head{
        width: 100%;
        position: relative;
      }
      .logo-left{
        margin-top: 25px;
      }
      .head-text{
        position: absolute;
      }
      .head-text p{
        padding: 0;
        margin: 0;
        font-size: 14px;
      }
      .vertical-divider{
        position: absolute;
        height: 105px;
        border-left: 1px solid black;
      }
      .bold-text{
        font-weight: 300;
      }
      .section-title{
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        text-align: center;
      }
      .section-title h3{
        padding: 0;
        margin: 0;
        padding: 8px;
      }
      
      .section-content{
        padding: 0;
        margin: 0;
        width: 100%;
        padding-left: 50px;
        padding-right: 50px;
      }

      .info-section td, th{
        border: 1px solid;
      }
      .info-section{
        margin-top: 10px;
        width: 85%;
        border-collapse: collapse;
      }
      .row-header{
        text-align: center;
      }
      .row-header h3{
        margin: 0;
        padding: 0;
        padding: 8px;
      }
    </style>
</head>
<body>
    <div class="section-head">
      <img class="logo-left" src="{{ $pdf_data['logo'] }}" alt="Example Image" width="110" height="110">
      <div class="vertical-divider"></div>
      <div class="head-text">
        <p>Republic of the philippines</p>
        <p class="bold-text">Northwest Samar State University</p>
        <p>Rueda St. Calbayog City 6710</p>
        <p>Website: http//www.nwssu.edu.ph</p>
        <p>Email: main@nwssu.edu.ph</p>
        <p>Telefax: (055) 2093657</p>
      </div>
    </div>
    <div class="section-title">
      <h3>QUALITY ASSURANCE OFFICE</h3>
    </div>
    <div class="section-content">
      <table class="info-section">
        <tbody>
          <tr>
            <td class="row-header" colspan="4">
              <h3>CLIENT FEEDBACK REPORT</h3>
            </td>
          </tr>
          <tr>
            <td style="width: 70px; text-align: center;">Month:</td>
            <td style="padding-left: 5px; width: 300px;">{{$pdf_data['month']}}</td>
            <td style="width: 70px; text-align: center;" rowspan="2">Year:</td>
            <td style="width: 70px; text-align: center;" rowspan="2">{{$pdf_data['year']}}</td>
          </tr>
          <tr>
            <td style="text-align: center;">Office:</td>
            <td style="padding-left: 5px;">Registrar's Office</td>
          </tr>
          <tr>
            <td colspan="4">l. Number of clients visited and answered the feedback form</td>
          </tr>
          <tr>
            <td style="text-align: center; padding: 8px;" colspan="4">
              There were {{$pdf_data['total_suggestion']}} clients who visited the registrar's and answered
              the client feedback form during the month of {{$pdf_data['month']}}
            </td>
          </tr>
          <tr>
            <td colspan="4">ll. Purpose/s of visit</td>
          </tr>
          <tr>
            <td colspan="4" style="padding: 20px 50px;">
              <small>Table 1. Purpose/s of visit</small>
              <table style="width:100%;">
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>f</th>
                    <th>Ranks</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach ($pdf_data['services'] as $key => $service)    
                  <tr>
                    <td>{{$service['name']}}</td>
                    <td style="text-align: center;">{{$service['bookings_count']}}</td>
                    <td style="text-align: center;">{{$key + 1}}</td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
              <small>Note: other did not indicate their purpose of visit</small>
            </td>
          </tr>
          <tr>
            <td colspan="4">lll. Client satisfaction for services provided</td>
          </tr>
          <tr>
            <td colspan="4" style="padding: 20px 50px;">
              <small>Table 2. Client satisfaction for services provided</small>
              <table style="width:100%;">
                <thead>
                  <tr>
                    <th>Indicators</th>
                    <th>Mean</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
                    <td>Waiting Time</td>
                    <td style="text-align: center;">{{$pdf_data['waiting_rate']}}</td>
                    <td style="text-align: center;">{{$pdf_data['waiting_legend']}}</td>
                  </tr>
                  <tr>
                    <td>Service Provided</td>
                    <td style="text-align: center;">{{$pdf_data['service_rate']}}</td>
                    <td style="text-align: center;">{{$pdf_data['service_legend']}}</td>
                  </tr>
                  <tr>
                    <td>Office Staff</td>
                    <td style="text-align: center;">{{$pdf_data['staff_rate']}}</td>
                    <td style="text-align: center;">{{$pdf_data['staff_legend']}}</td>
                  </tr>
                  <tr>
                    <td>OVERALL</td>
                    <td style="text-align: center;">{{$pdf_data['overall_rate']}}</td>
                    <td style="text-align: center;">{{$pdf_data['overall_legend']}}</td>
                  </tr>
                </tbody>
              </table>
              <small>Legend:</small>
              <br>
              <small style="margin-left: 20px;">4.51-5.00 - Best</small>
              <br>
              <small style="margin-left: 20px;">3.51-4.50 - Better</small>
              <br>
              <small style="margin-left: 20px;">2.51-3.50 - Good</small>
              <br>
              <small style="margin-left: 20px;">1.51-2.50 - Fair</small>
              <br>
              <small style="margin-left: 20px;">1.00-1.50 - Poor</small>
            </td>
          </tr>
          <tr>
            <td colspan="4">lV. Suggestions to help improve the services</td>
          </tr>
          <tr>
            <td colspan="4" style="padding: 10px 50px;">
              <table style="width:100%;">
                <thead>
                  <tr>
                    <th>Suggestions</th>
                  </tr>
                </thead>
                <tbody> 
                  @foreach ($pdf_data['suggestions'] as $suggestion)    
                    <tr>
                      <td style="text-align: center; font-size: 14px;">{{$suggestion}}</td>
                    </tr>
                  @endforeach
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="4">Prepared by:</td>
          </tr>
          <tr>
            <td style="text-align: center;">Signature: </td>
            <td style="text-align: center;">
              <p style="padding:0; margin:0; margin-top:15px;">JIREH S FORTALEZA</p>
              <p style="padding:0; margin:0;">Focal person, regulatory quality standard</p>
            </td>
            <td style="text-align: center;">Date: </td>
            <td></td>
          </tr>
          <tr>
            <td style="text-align: center;">Signature: </td>
            <td style="text-align: center;">
              <p style="padding:0; margin:0; margin-top:15px;">RODOLFO F. DOLLADO, JR., Ph.D.</p>
              <p style="padding:0; margin:0;">Director, Quality Assurance</p>
            </td>
            <td style="text-align: center;">Date: </td>
            <td></td>
          </tr>
          <tr>
            <td style="text-align: center;">Signature: </td>
            <td style="text-align: center;">
              <p></p>
            </td>
            <td style="text-align: center;">Date: </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
</body>
</html>