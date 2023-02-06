import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class LocationGateway {

  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
  }

  sendMessage(location){
    this.server.emit('location', location);
  }
}
