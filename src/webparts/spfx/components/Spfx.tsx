import * as React from 'react';
import styles from './Spfx.module.scss';
import { ISpfxProps } from './ISpfxProps';
import * as jquery from 'jquery';
import { escape } from '@microsoft/sp-lodash-subset';
export interface IReactSpfxState{  
  items:[  
        {  
          "Courses": "", 
          "Credit": "", 
          "Department":"",
        }] ;
}  
export default class Spfx extends React.Component<ISpfxProps,{}> {

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
     () => this.fetchDatafromSharePointList(),
     1000
   );
 }

private fetchDatafromSharePointList()
{

 
 var reactHandler = this;  
 //alert(this.props.siteurl);
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
}*/
  public render(): React.ReactElement<ISpfxProps> {
    return (
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
    );
  }
}
