'use strict';

const projects = [
  {
    id:'soc', number:'01', period:'2025.11 — 2026.06', tags:['RISC-V / C908','UCIe','AXI 512-bit','TSMC 28 nm'],
    zh:{type:'本科毕业设计 / SoC 与互连',title:'高性能 RISC-V SoC 设计与验证',description:'围绕 C908 构建 RISC-V SoC，集成 UCIe Chiplet 接口、片上总线、存储与外设，验证跨芯粒数据通信。',metrics:[['500','MHz','时序目标达成'],['256','Gbps','每方向理论峰值'],['≈22','ns','RDI-to-RDI 延迟']],details:['实现 512-bit AXI-to-UCIe 适配器，完成地址映射与数据通路转换。','基于 TSMC 28 nm 工艺达到 500 MHz 时序要求；配置 64 条 UCIe 通道，每条 4 GT/s。','通过 RTL 仿真与 C 测试验证跨 Chiplet 通信；测得 RDI-to-RDI 延迟约 22 ns。']},
    en:{type:'UNDERGRADUATE THESIS / SoC & INTERCONNECT',title:'High-performance RISC-V SoC',description:'A C908-based RISC-V SoC integrating a UCIe chiplet interface, on-chip buses, memory, and peripherals, verified for cross-chiplet communication.',metrics:[['500','MHz','Timing requirement met'],['256','Gbps','Theoretical peak / direction'],['≈22','ns','RDI-to-RDI latency']],details:['Implemented a 512-bit AXI-to-UCIe adapter for address mapping and data-path conversion.','Met 500 MHz timing requirements on TSMC 28 nm; configured 64 UCIe lanes at 4 GT/s each.','Verified cross-chiplet communication with RTL simulation and C tests; measured approximately 22 ns RDI-to-RDI latency.']}
  },
  {
    id:'cnn', number:'02', period:'2024.11 — 2025.11', tags:['INT8 MAC Array','RTL → Physical Design','Synopsys','SMIC 0.18 μm'],
    zh:{type:'本科研究项目 / AI 硬件',title:'CNN 硬件加速器设计',description:'基于 INT8 乘加阵列实现 CNN 加速器，覆盖 RTL 设计、功能验证、综合、时序分析与物理实现。',metrics:[['98','GOPS','INT8 算力'],['96.7','MHz','运行频率'],['1.1','W','功耗']],details:['使用 Synopsys 工具链与 SMIC 0.18 μm 工艺进行综合及时序分析。','实现 200,000 samples/s，约合 49 GMAC/s（98 INT8 GOPS）。','完成从 RTL 到物理实现的硬件设计流程。']},
    en:{type:'UNDERGRADUATE RESEARCH / AI HARDWARE',title:'CNN hardware accelerator',description:'An INT8 MAC-array CNN accelerator, developed from RTL design and functional verification through synthesis, timing analysis, and physical implementation.',metrics:[['98','GOPS','INT8 throughput'],['96.7','MHz','Operating frequency'],['1.1','W','Power']],details:['Performed synthesis and timing analysis using Synopsys tools and SMIC 0.18 μm technology.','Achieved 200,000 samples/s, equivalent to approximately 49 GMAC/s (98 INT8 GOPS).','Implemented the accelerator through the RTL-to-physical-design flow.']}
  },
  {
    id:'edge', number:'03', period:'2025.01 — 2025.08', tags:['EIC7700X','YOLOv5s','ResNet34','Qwen2'],
    zh:{type:'全国总决赛一等奖 / 边缘 AI 应用',title:'AI 芯片智能助教',description:'将视觉感知与语音、文本交互带到边缘端，在 EIC7700X 上部署量化模型，构建智能教学辅助应用。',metrics:[['≈1','ms','ResNet34 推理'],['≈3','ms','YOLOv5s 推理'],['一等奖','','全国总决赛 · 2025']],details:['训练并量化 YOLOv5s 与 ResNet34，使用 Qwen2 增加语音与文本交互。','ResNet34 在 FER2013 测试集上准确率 73.3%；YOLOv5s 在 WiderFace 上 mAP@0.5 为 73.31%。','使用 ES_Run_Model 测量推理耗时；获全国大学生集成电路创新创业大赛全国总决赛一等奖。']},
    en:{type:'NATIONAL FIRST PRIZE / EDGE AI APPLICATION',title:'AI-powered teaching assistant',description:'Bringing vision, voice, and text interaction to the edge, with quantized models deployed on EIC7700X for a smart teaching assistant.',metrics:[['≈1','ms','ResNet34 inference'],['≈3','ms','YOLOv5s inference'],['1st','Prize','National Finals · 2025']],details:['Trained and quantized YOLOv5s and ResNet34; added Qwen2-based voice and text interaction.','Achieved 73.3% ResNet34 test accuracy on FER2013 and 73.31% YOLOv5s mAP@0.5 on WiderFace.','Measured inference using ES_Run_Model; received First Prize at the National Undergraduate IC Innovation and Entrepreneurship Competition National Finals.']}
  }
];

let language='zh';
try { language=localStorage.getItem('portfolio-language')==='en'?'en':'zh'; } catch { /* Storage is optional. */ }

function renderProjects() {
  const expanded=new Set([...document.querySelectorAll('.project details[open]')].map(el=>el.closest('.project').id));
  document.querySelector('#projects').innerHTML=projects.map(project=>{
    const content=project[language];
    return `<article class="project" id="project-${project.id}"><div class="project-copy"><p class="project-type">${content.type}</p><div class="project-heading"><h3>${content.title}</h3><p class="project-period">${project.period}</p></div><p class="project-description">${content.description}</p><div class="metrics">${content.metrics.map(([value,unit,label])=>`<div class="metric"><strong>${value}<small>${unit}</small></strong><span>${label}</span></div>`).join('')}</div><div class="tags">${project.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><details${expanded.has('project-'+project.id)?' open':''}><summary>${language==='zh'?'项目详情':'Technical details'}</summary><ul>${content.details.map(detail=>`<li>${detail}</li>`).join('')}</ul></details></div></article>`;
  }).join('');
}

function setLanguage(next) {
  language=next;
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el=>{el.textContent=el.dataset[language];});
  const button=document.querySelector('#language');
  button.innerHTML=language==='zh'?'EN <span>↗</span>':'中文 <span>↗</span>';
  button.setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');
  document.querySelector('nav').setAttribute('aria-label',language==='zh'?'主导航':'Main navigation');
  document.title=language==='zh'?'韩汪洋 Wangyang Han · Personal Homepage':'Wangyang Han · Personal Homepage';
  document.querySelector('meta[name="description"]').content=language==='zh'?'韩汪洋 Wangyang Han — 上海交通大学集成电路研究生。关注 RISC-V SoC、Chiplet、AI 芯片架构与硬件加速。':"Wangyang Han, an IC engineering master's student at Shanghai Jiao Tong University. RISC-V SoCs, chiplet interconnects, and AI acceleration.";
  document.querySelector('#copy-status').textContent='';
  renderProjects();
  try {localStorage.setItem('portfolio-language',language);} catch { /* Storage is optional. */ }
}

document.querySelector('#language').addEventListener('click',()=>setLanguage(language==='zh'?'en':'zh'));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('oceanhan0420@gmail.com');
    status.textContent=language==='zh'?'邮箱已复制。':'Email copied.';
  } catch {
    status.textContent=language==='zh'?'请选中邮箱地址复制：oceanhan0420@gmail.com':'Select and copy: oceanhan0420@gmail.com';
  }
});
setLanguage(language);
