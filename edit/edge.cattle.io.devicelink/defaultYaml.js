export const BLUE_THOOTH_DEVICE = {
  adaptor: {
    node: '',
    name: 'adaptors.edge.cattle.io/ble'
  },
  model: {
    apiVersion: 'devices.edge.cattle.io/v1alpha1',
    kind:       'BluetoothDevice'
  },
  template: {
    metadata: { labels: { } },
    spec:     {
      name:       '',
      macAddress: '',
      properties: []
    }
  }
};

export const MODBUS_DEVICE_RTU = {
  adaptor: {
    node: '',
    name: 'adaptors.edge.cattle.io/modbus'
  },
  model: {
    apiVersion: 'devices.edge.cattle.io/v1alpha1',
    kind:       'ModbusDevice'
  },
  template: {
    metadata: { labels: {} },
    spec:     {
      protocol: {
        rtu: {
          slaveID:    '',
          serialPort: '',
          baudRate:   '',
          dataBits:   '',
          parity:     '',
          stopBits:   ''
        }
      },
      properties: []
    }
  }
};

export const MODBUS_DEVICE_TCP = {
  adaptor: {
    node: '',
    name: 'adaptors.edge.cattle.io/modbus'
  },
  model: {
    apiVersion: 'devices.edge.cattle.io/v1alpha1',
    kind:       'ModbusDevice'
  },
  template: {
    metadata: { labels: {} },
    spec:     {
      protocol: {
        tcp: {
          slaveID:    '',
          serialPort: '',
          ip:         '',
          port:       ''
        }
      },
      properties: []
    }
  }
};

export const OPC_UA_DEVICE = {
  adaptor: {
    node: '',
    name: 'adaptors.edge.cattle.io/modbus'
  },
  model: {
    apiVersion: 'devices.edge.cattle.io/v1alpha1',
    kind:       'OPCUADevice'
  },
  template: {
    metadata: { labels: {} },
    spec:     {
      protocol: {
        url:      '',
        username: '',
        password:   '',
      },
      properties: []
    }
  }
};

export const customDevice = {
  adaptor: {
    node: '',
    name: ''
  },
  model: {
    apiVersion: 'devices.edge.cattle.io/v1alpha1',
    kind:       ''
  },
  template: {
    metadata: { labels: { wj: 'test1' } },
    spec:     {
      protocol:   {},
      properties: []
    }
  }
};