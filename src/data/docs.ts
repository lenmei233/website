export interface DocItem {
  id: string
  title: string
}

export interface DocGroup {
  category: string
  items: DocItem[]
}

export const docGroups: DocGroup[] = [
  {
    category: '快速开始',
    items: [
      { id: 'install', title: '下载与安装' },
      { id: 'setup-java', title: '设置 Java' },
      { id: 'add-account', title: '添加账户' },
      { id: 'create-instance', title: '创建实例' },
    ],
  },
  {
    category: '核心功能',
    items: [
      { id: 'manage-mods', title: '管理模组与资源' },
      { id: 'resource-center', title: '资源中心' },
      { id: 'launch-game', title: '启动游戏' },
      { id: 'multiplayer', title: '联机功能' },
      { id: 'version-isolation', title: '版本隔离' },
    ],
  },
]

export function flatDocs(): DocItem[] {
  return docGroups.flatMap(g => g.items)
}
