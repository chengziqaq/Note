#include "OSAL.h"
#include "AF.h"
#include "ZDApp.h"
#include "ZDObject.h"
#include "ZDProfile.h"
#include "Coordinator.h"
#include "DebugTrace.h"
#include <string.h>

#if !defined(WIN32)
#include "OnBoard.h"
#endif

#include "hal_lcd.h"
#include "hal_led.h"
#include "hal_key.h"
#include "hal_uart.h"

const cId_t GenericApp_ClusterList[GENERICAPP_MAX_CLUSTERS] = 
{
  GENERICAPP_CLUSTERID
};

const SimpleDescriptionFormat_t GenericApp_SimpleDesc = 
{
  GENERICAPP_ENDPOINT,
  GENERICAPP_PROFID,
  GENERICAPP_DEVICEID,
  GENERICAPP_DEVICE_VERSION,
  GENERICAPP_FLAGS,
  GENERICAPP_MAX_CLUSTERS,
  (cId_t *)GenericApp_ClusterList,
  0,
  (cIdt *)NULL
};

endPointDesc_t GenericApp_epDesc;
byte GenericApp_TaskID;
byte GenericApp_TransID;

/*typedef struct
{
  byte endPoint;
  byte *task_ id;
  SimpleDescriptionFormat t *simpleDesc;
  afNetwor kLatencyReq_ t latencyReq;
  } endPointDesc t;*/

void GenericApp_MessageMSGCB( afIncomingMSGPacket_t *pckt );
void GenericApp_SendTheMessage (void);

void GenericApp_Init( byte task_ id )
{
  GenericApp_TaskID  = task_id;
  GenericApp_TransID  = 0;
  GenericApP_epDesc.endPoint  = GENERICAPP ENDPOINT;
  GenericApp_epDesc.task_id  = &GenericApp_TaskID;
  GenericApp_epDesc.simp1eDesc = (SimpleDescriptionFormat_t *) &GenericApp_ SimpleDesc;
  GenericApP_epDesc.latencyReq  = noLatencyReqs;
  afRegister ( &GenericAPP_epDesc ) ;
}
UINT16 GenericApp_ProcessEvent( byte task_id, UINT16 events )
{
  afIncomingMSGPacket_t *MSGpkt;
  if ( events & SYS_EVENT_MSG )
  {
    MSGpkt = (afIncomingMSGPacket_t *)osal_msg_receive (GenericAppTaskID );
    while ( MSGpkt )
    {
      switch ( MSGpkt->hdr.event ) .
      {
        case AF_INCOMING_MSG_CMD:
          GenericApp_MessageMSGCB ( MSGpkt ) ;
          break;
          defult :
            break;
      }
      osal_msg_deallocate( (uint8 *) MSGpkt ) ;
      MSGpkt = (afIncomingMSGPacket_t *)osal_msg_receive( GenericApp_TaskID ) ;
    }
                return (events ^ SYS_EVENT_MSG) ;
  }
                return 0;
}
void GenericApp_MessageMSGCB ( afIncomingMSGPacket_t*pkt )
{
  unsigned char buffer[4] = " ";
  switch ( pkt->clusterId )
  {
    case GENERICAPP_ CLOSTERID :
      osal_memcpy (buffer, pkt->cmd.Data,3) ;
      if( (buffer{0] == 'L') || (buffer[1] == 'E') 11 (buffer [2] =='D')}
           {
             HalLedBlink (HAL_LED_2,0,50, 500) ;
           }
           else
           {
             HalLedSet (HAL_LED_2, HAL_LED_MODE_ON) ;
           }
           break;
  }
}
             