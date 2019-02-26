import * as React from 'react';
import styles from './Spfx.module.scss';
import { ISpfxProps } from './ISpfxProps';
import * as jquery from 'jquery';
import { Label } from 'office-ui-fabric-react/lib/components/Label';
import { Button } from 'office-ui-fabric-react/lib/components/Button';
import { escape } from '@microsoft/sp-lodash-subset';
import {  
  SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions} from '@microsoft/sp-http'; 
export interface IReactSpfxState{  
  items:[  
        {  
          "Courses": "", 
          "Credit": "", 
          "Department":"",
        }] ;
}  
export default class Spfx extends React.Component<ISpfxProps,IReactSpfxState> {

  public constructor(props: ISpfxProps, state: IReactSpfxState){  
    super(props); 
    
    this.state = {  
      items: [  
        {  
          "Courses": "", 
          "Credit": "", 
          "Department":"",
         
        }  
      ]
    };  
  }  

  /*public componentDidMount() {
    setInterval(
     () => this.retrieveData(),
     1000
   );
 }

  private retrieveData()
  {
    var reactHandler = this;  
    let currentWebUrl = this.context.pageContext.web.absoluteUrl;
    let requestUrl = currentWebUrl.concat("/_api/web/lists/getbytitle('CourseDetails')/items");   
  alert(requestUrl);
this.context.spHttpClient.get(requestUrl, SPHttpClient.configurations.v1)  
    .then((response: SPHttpClientResponse) => {  
        if (response.ok) {  
            response.json().then((responseJSON) => {  
                if (responseJSON!=null && responseJSON.value!=null){ 
                   alert(responseJSON + requestUrl);
        //let itemCount:number = parseInt(responseJSON.value.toString());  
                }  
                else
                {
                  alert("error");
                }
            });  
        }  
    });  
  }*/

  public componentDidMount() {
    setInterval(
     () => this.fetchDatafromSharePointList(),
     1000
   );
 }

private fetchDatafromSharePointList()
{

 
 var reactHandler = this;  
 alert(this.props.siteurl);
   jquery.ajax({  
       url: `${this.props.siteurl}/_api/web/lists/getbytitle('CourseDetails')/items`, 
       //url: `https://ashish345.sharepoint.com/sites/intranet/_api/web/lists/getbytitle('CourseDetails')/items`, 
       type: "GET",  
       headers:{'Accept': 'application/json; odata=verbose;'},  
       success: function(resultData) {  
         
         reactHandler.setState({  
           items: resultData.d.results  
         });  
       },  
       error : function(jqXHR, textStatus, errorThrown) {  
       }  
   });  
}

  public render(): React.ReactElement<ISpfxProps> {

    return (  

      <div className={styles.panelStyle} > 
        <br></br>
        <div><Label>I am a office ui fabric label.</Label></div>
        <div><Button>I am a office ui fabric button.</Button></div>
        <br></br> 
        <div className={styles.tableCaptionStyle} >Fetch Course Details from SharePointList using SPFx,RESTAPI,React JS
          Data on page changes with change in the SharePointList  </div>
        <br></br>
         <div className={styles.headerCaptionStyle} >Course Details</div>
        <div className={styles.tableStyle} >   
          
          <div className={styles.headerStyle} >  
            <div className={styles.CellStyle}>Courses</div>  
            <div className={styles.CellStyle}>Credit </div>  
            <div className={styles.CellStyle}>Department</div>  
              
                   
          </div>  
          
            {this.state.items.map(function(item,key){  
              
              return (<div className={styles.rowStyle} key={key}>  
                  <div className={styles.CellStyle}>{item.Courses}</div>  
                  <div className={styles.CellStyle}>{item.Credit}</div>  
                   <div className={styles.CellStyle}>{item.Department}</div>
                    
        
                </div>);  
            })}  
                  
        </div>  
      </div>  


  ); 
    /* return (
      <div className={ styles.spfx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ); */
  }
}
